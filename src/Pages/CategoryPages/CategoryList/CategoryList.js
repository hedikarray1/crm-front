import React, { useEffect, useState } from 'react'
import "./CategoryList.css"
import * as IConAi from "react-icons/ai"
import * as IConBi from "react-icons/bi"
import * as IConBs from "react-icons/bs"

import { connect } from 'react-redux';
import { Accordion, Button, Card, Form, Modal } from 'react-bootstrap';
import { render } from '@testing-library/react';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import { propTypes } from 'react-bootstrap/esm/Image';
import * as IoiIcons from "react-icons/io";
import {  ClientGetAllCategories } from '../../../Actions/Category'
import { RequestTokenuploadPictureToServer } from '../../../Actions/PictureWordPress'

function TablePaginationActions(props) {
    // const classes = useStyles1();
    // const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className="root">
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="première page"
            >
                {<LastPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="page précédente">
                {<KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="page suivante"
            >
                {<KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {/*theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />*/}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    /* count: propTypes.number.isRequired,
     onChangePage: propTypes.func.isRequired,
     page: propTypes.number.isRequired,
     rowsPerPage: propTypes.number.isRequired,
     */
};


function CategoryList(props) {

    const [categories, setcategories] = useState([]);
    const [ModalAddState, setModalAddState] = useState(false);
    const [CategoryDataUpdate, setCategoryDataUpdate] = useState({  });
    const [CategoryAddData, setCategoryAddData] = useState({});
    const [ModalDetailsState, setModalDetailsState] = useState(false);
    const [ModalDeleteState, setModalDeleteState] = useState(false);
    const [ModalUpdateState, setModalUpdateState] = useState(false);
    const [totalpages, setTotalPages] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(1);
    const [selectedCategory, setselectedCategory] = useState({});
    const toggleDeleteCategory = (Category) => { setModalDeleteState(!ModalDeleteState); setselectedCategory(Category); };
    const toggleUpdateCategory = (Category) => { setModalUpdateState(!ModalUpdateState); setCategoryDataUpdate(Category); };

    const toggleAddCategory = () => { setModalAddState(!ModalAddState) };
    const toggleDetailsCategory = (Category) => {
        setModalDetailsState(!ModalDetailsState);
        setselectedCategory(Category)
    };
    const [resultImageAdd, setResultImageAdd] = React.useState("");
    const [imageAddCategory, setImageAddCategory] = React.useState("");
        const [result, setResult] = React.useState("");
    
    function uploader(e) {
        const imageFile = e.target.files[0];
  
        const reader = new FileReader();
        reader.addEventListener("load", (e) => {
          setResult(e.target.result);
          let caption="test image from front";
          let title="titleFromFront";
          props.uploadPictureToServer("anissa","Poimlknbv13785",imageFile,title,caption)
        });
  
        reader.readAsDataURL(imageFile);
      //  props.uploadPictureToServer(e.target.files[0],title,caption)
      }
  
    //  return { result, uploader };
    

    useEffect(() => {
        getData();
        setRowsPerPage(10);
    }, []);
    const getData = () => {
        props.getCategories("",page,rowsPerPage);
        setcategories(props.categories);
        setTotalPages(props.total_category_pages);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, categories.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1);
        props.getCategories("",page,rowsPerPage);
        setcategories((props.categories));
    };

    const onChangeFormAdd = (attribute, value) => {
        let Category1 = CategoryAddData;
        Category1[attribute] = value;
        setCategoryAddData(Category1);
    };
    const onChangeFormAddImage = (attribute, value) => {
        let Category1 = CategoryAddData;
        Category1.image[attribute]= value;
        setCategoryAddData(Category1);
    };
    const onChangeFormAddShipping = (attribute, value) => {
        let Category1 = CategoryAddData;
        Category1.shipping[attribute] = value;
        setCategoryAddData(Category1);
    };

    const onChangeFormUpdate = (attribute, value) => {
        let Category1 = CategoryDataUpdate;
        Category1[attribute] = value;
        setCategoryDataUpdate(Category1);
    };
    const onChangeFormUpdateBilling = (attribute, value) => {
        let Category1 = CategoryDataUpdate;
        Category1.billing[attribute] = value;
        setCategoryDataUpdate(Category1);
    };
    const onChangeFormUpdateShipping = (attribute, value) => {
        let Category1 = CategoryDataUpdate;
        Category1.shipping[attribute] = value;
        setCategoryDataUpdate(Category1);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <button type="button" className="btn btn-outline-primary col-md-2 offset-9 mt-5" data-toggle="modal" onClick={() => { toggleAddCategory(); }}>
                    Ajouter une catégorie
            </button>
            </div>

            <TableContainer component={Paper}>
                <Table aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: 160 }} align="left">Nom</TableCell>
                            <TableCell style={{ width: 160 }} align="left">Slug</TableCell>
                            <TableCell style={{ width: 160 }} align="left">Categorie parent</TableCell>
                            <TableCell style={{ width: 160 }} align="left">description</TableCell>
                            <TableCell style={{ width: 190 }} align="left">Nombre de produits</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            categories.map((Category) => (
                                <TableRow key={categories.lastname}>
                                    <TableCell component="th" scope="row">
                                        {Category.name}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="left">
                                        {Category.slug}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="left">
                                        {Category.parent ==0? "pas de categorie parente":Category.parent}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="left">
                                        {Category.description}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="left">
                                        {Category.count}
                                    </TableCell>
                                    <TableCell style={{ width: 50 }} align="left" onClick={() => { toggleDetailsCategory(Category); console.log(Category) }}>
                                        <IConBi.BiDetail color="#013264" size="20" />
                                    </TableCell>
                                    <TableCell style={{ width: 50 }} align="left">
                                        <IConBs.BsTrash color="#b90000" size="20" onClick={() => { toggleDeleteCategory(Category); }} />

                                    </TableCell>
                                    <TableCell style={{ width: 50 }} align="left">
                                        <IConBi.BiEdit onClick={() => { toggleUpdateCategory(Category); }} color="#ffc31f" size="20" className="icon-edit-hover " />
                                    </TableCell>
                                </TableRow>
                            ))}

                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                colSpan={3}
                                count={categories.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                    native: true,
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>

            <Modal dialogClassName="dialog-right" scrollable="true" onHide={() => setModalAddState(false)} show={ModalAddState}>
                <Modal.Header><Modal.Title>Ajout d'une catégorie</Modal.Title></Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" placeholder="exemple" onChange={(e) => { onChangeFormAdd("name", e.target.value) }} />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="exemple" onChange={(e) => { onChangeFormAdd("description", e.target.value) }} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Slug</Form.Label>
                            <Form.Control type="text" placeholder="exemple" onChange={(e) => { onChangeFormAdd("slug", e.target.value) }} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>catégorie mère</Form.Label>
                            <Form.Control type="text" placeholder="ben foulen" onChange={(e) => { onChangeFormAdd("parent", e.target.value) }} />
                        </Form.Group>
                        <Accordion defaultActiveKey="0">

                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Images
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>image</Form.Label>
                                                <input type="file" onChange={(e) => { setImageAddCategory(e.target.files[0]); uploader(e);  }}/>
                                            </Form.Group>
                                          

                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>



                      
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" onClick={() => { toggleAddCategory(); }}>
                        Annuler
</button>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" onClick={() => { toggleAddCategory(); console.log(CategoryAddData); props.addCategory(CategoryAddData); getData() }}>
                        Ajouter
</button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" scrollable="true" onHide={() => setModalDetailsState(false)} show={ModalDetailsState}>
                <Modal.Body>
                    {selectedCategory.hasOwnProperty("name") ? (
                        <div className="container">
                            <div className="row">
                                <div className="Category-simple-infos-picture-data-modal col-md-6 ">
                                  {selectedCategory.image!=null?  <img className="Category-simple-infos-picture-modal" src={selectedCategory.image.src}></img>:null}
                                    <div className="Category-simple-infos-data-modal">
                                        <div className="Category-simple-infos-data-username-modal">{selectedCategory.name}</div>
                                        <div className="Category-simple-infos-data-email-modal">{selectedCategory.description}</div>
                                    </div>
                                </div>
                                <div className="Category-simple-infos-points-modal col-md-2 offset-4  "> <div>{selectedCategory.count }</div>
                                    <div> produits</div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="Category-personal-info-modal col-md-12">
                                    <div className="modal-section-title">Informations Générales</div>
                                    <div className="Category-personal-info-modal-row ">
                                        <div className="Category-simple-infos-data-username-modal">Nom:</div>
                                        <div className="Category-simple-infos-data-email-modal">{selectedCategory.name}</div>
                                    </div>
                                    <div className="Category-personal-info-modal-row ">
                                        <div className="Category-simple-infos-data-username-modal">Description:</div>
                                        <div className="Category-simple-infos-data-email-modal">{selectedCategory.description}</div>
                                    </div>
                                    <div className="Category-personal-info-modal-row">
                                        <div className="Category-simple-infos-data-username-modal">Catégorie mère:</div>
                                        <div className="Category-simple-infos-data-email-modal">{selectedCategory.parent}</div>
                                    </div>
                                    <div className="Category-personal-info-modal-row">
                                        <div className="Category-simple-infos-data-username-modal">ordre dans le menu:</div>
                                        <div className="Category-simple-infos-data-email-modal">{selectedCategory.menu_order}</div>
                                    </div>
                                </div>
                          
                            </div>


                        </div>
                    ) : null}
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" onClick={() => { toggleDetailsCategory({}); }}>
                        Fermer
</button>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" onClick={() => { toggleDetailsCategory(selectedCategory); toggleUpdateCategory(selectedCategory) }}>
                        Modifier
</button>
                </Modal.Footer>
            </Modal>

            <Modal onHide={() => toggleDeleteCategory()} show={ModalDeleteState}>
                <Modal.Header><Modal.Title>suppression d'une Catégorie</Modal.Title></Modal.Header>
                <Modal.Body>
                    <p>Voulez vous vraiment supprimer {selectedCategory.name} ?</p>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" onClick={() => { toggleDeleteCategory({}); }}>
                        Annuler
</button>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" onClick={() => { toggleDeleteCategory({}); props.deleteCategory(selectedCategory.id, rowsPerPage, page); setselectedCategory({}); getData(); }}>
                        supprimer
</button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" scrollable="true" onHide={() => setModalUpdateState(false)} show={ModalUpdateState}>
                <Modal.Header><Modal.Title>Modification des informations d'une catégorie</Modal.Title></Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" placeholder="exemple"   defaultValue={CategoryDataUpdate.name} onChange={(e) => { onChangeFormUpdate("name", e.target.value) }} />

                        </Form.Group> 
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Slug</Form.Label>
                            <Form.Control type="text" placeholder="exemple"   defaultValue={CategoryDataUpdate.slug} onChange={(e) => { onChangeFormUpdate("slug", e.target.value) }} />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="exemple" defaultValue={CategoryDataUpdate.description} onChange={(e) => { onChangeFormUpdate("description", e.target.value) }} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Catégorie mère</Form.Label>
                            <Form.Control type="text" placeholder="foulen" defaultValue={CategoryDataUpdate.first_name} onChange={(e) => { onChangeFormUpdate("parent", e.target.value) }} />
                        </Form.Group>
                       
                        <Accordion defaultActiveKey="0">

                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                       Images
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Form>
                                          

                                          
                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" onClick={() => { toggleUpdateCategory({}); }}>
                        Annuler
</button>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" onClick={() => { console.log(CategoryDataUpdate);props.updateCategory(CategoryDataUpdate.id, CategoryDataUpdate, rowsPerPage, page);  toggleUpdateCategory({}); setselectedCategory({}); getData(); }}>
                        Modifier
</button>
                </Modal.Footer>
            </Modal>


        </div>


    )
}



const mapStateToProps = (state) => {
    // console.log("in state",state);
    return { user: state.Auth.current_user, categories: state.Category.allCategories, total_categories: state.Category.totalCategory, total_category_pages: state.Category.totalPagesCategory };
};


const mapDispatchProps = (dispatch) => {
    return {
        getCategories: (auth,page, per_page) => {
            dispatch(ClientGetAllCategories(auth,page, per_page))
        },
        uploadPictureToServer: (username,password,file,title, caption) => {
            dispatch(RequestTokenuploadPictureToServer(username,password,file,title, caption))
        },
       /* deleteCategory: (id, per_page, page) => { dispatch(DeleteCategory(id, per_page, page)) },
        addCategory: (Category) => {
            dispatch(AddCategory(Category))
        },
        updateCategory: (id, Category) => {
            dispatch(UpdateCategory(id, Category))
        },*/
    }

};


export default connect(mapStateToProps, mapDispatchProps)(CategoryList)



