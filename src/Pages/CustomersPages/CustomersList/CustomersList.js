import React, { useEffect, useState } from 'react'
import { AddCustomer, DeleteCustomer, GetAllCustomers, UpdateCustomer } from '../../../Actions/Customer';
import "./CustomersList.css"
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


function CustomersList(props) {

    const [customers, setCustomers] = useState([]);
    const [ModalAddState, setModalAddState] = useState(false);
    const [customerDataUpdate, setCustomerDataUpdate] = useState({ billing: {}, shipping: {} });
    const [customerAddData, setCustomerAddData] = useState({ billing: {}, shipping: {} });
    const [ModalDetailsState, setModalDetailsState] = useState(false);
    const [ModalDeleteState, setModalDeleteState] = useState(false);
    const [ModalUpdateState, setModalUpdateState] = useState(false);
    const [totalpages, setTotalPages] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(1);
    const [selectedCustomer, setSelectedCustomer] = useState({});
    const toggleDeleteCustomer = (customer) => { setModalDeleteState(!ModalDeleteState); setSelectedCustomer(customer); };
    const toggleUpdateCustomer = (customer) => { setModalUpdateState(!ModalUpdateState); setCustomerDataUpdate(customer); };

    const toggleAddCustomer = () => { setModalAddState(!ModalAddState) };
    const toggleDetailsCustomer = (customer) => {
        setModalDetailsState(!ModalDetailsState);
        setSelectedCustomer(customer)
    };

    useEffect(() => {
        getData();
        setRowsPerPage(10);
    }, []);
    const getData = () => {
        props.getCustomers(rowsPerPage, page);
        setCustomers(props.customers);
        setTotalPages(props.total_customer_pages);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, customers.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1);
        props.getCustomers(rowsPerPage, page);
        setCustomers((props.customers));
    };

    const onChangeFormAdd = (attribute, value) => {
        let customer1 = customerAddData;
        customer1[attribute] = value;
        setCustomerAddData(customer1);
    };
    const onChangeFormAddBilling = (attribute, value) => {
        let customer1 = customerAddData;
        customer1.billing[attribute] = value;
        setCustomerAddData(customer1);
    };
    const onChangeFormAddShipping = (attribute, value) => {
        let customer1 = customerAddData;
        customer1.shipping[attribute] = value;
        setCustomerAddData(customer1);
    };

    const onChangeFormUpdate = (attribute, value) => {
        let customer1 = customerDataUpdate;
        customer1[attribute] = value;
        setCustomerDataUpdate(customer1);
    };
    const onChangeFormUpdateBilling = (attribute, value) => {
        let customer1 = customerDataUpdate;
        customer1.billing[attribute] = value;
        setCustomerDataUpdate(customer1);
    };
    const onChangeFormUpdateShipping = (attribute, value) => {
        let customer1 = customerDataUpdate;
        customer1.shipping[attribute] = value;
        setCustomerDataUpdate(customer1);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <button type="button" className="btn btn-outline-primary col-md-2 offset-9 mt-5" data-toggle="modal" onClick={() => { toggleAddCustomer(); }}>
                    Ajouter un client
            </button>
            </div>

            <TableContainer component={Paper}>
                <Table aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: 160 }} align="left">Nom</TableCell>
                            <TableCell style={{ width: 160 }} align="left">Prénom</TableCell>
                            <TableCell style={{ width: 160 }} align="left">Nom d'utilisateur</TableCell>
                            <TableCell style={{ width: 160 }} align="left">Adresse électronique</TableCell>
                            <TableCell style={{ width: 190 }} align="left">Points de fidélité</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            customers.map((customer) => (
                                <TableRow key={customers.lastname}>
                                    <TableCell component="th" scope="row">
                                        {customer.name}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="left">
                                        {customer.firstname}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="left">
                                        {customer.username}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="left">
                                        {customer.email}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="left">
                                        {customer.meta_data[0].value}
                                    </TableCell>
                                    <TableCell style={{ width: 50 }} align="left" onClick={() => { toggleDetailsCustomer(customer) }}>
                                        <IConBi.BiDetail color="#013264" size="20" />
                                    </TableCell>
                                    <TableCell style={{ width: 50 }} align="left">
                                        <IConBs.BsTrash color="#b90000" size="20" onClick={() => { toggleDeleteCustomer(customer); }} />

                                    </TableCell>
                                    <TableCell style={{ width: 50 }} align="left">
                                        <IConBi.BiEdit onClick={() => { toggleUpdateCustomer(customer); }} color="#ffc31f" size="20" className="icon-edit-hover " />
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
                                count={customers.length}
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
                <Modal.Header><Modal.Title>Ajout d'un client</Modal.Title></Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Adresse électronique</Form.Label>
                            <Form.Control type="email" placeholder="foulen.benfoulen@gmail.com" onChange={(e) => { onChangeFormAdd("email", e.target.value) }} />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" placeholder="ben foulen" onChange={(e) => { onChangeFormAdd("last_name", e.target.value) }} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Prenom</Form.Label>
                            <Form.Control type="text" placeholder="foulen" onChange={(e) => { onChangeFormAdd("first_name", e.target.value) }} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nom d'utilisateur</Form.Label>
                            <Form.Control type="text" placeholder="ben foulen" onChange={(e) => { onChangeFormAdd("username", e.target.value) }} />
                        </Form.Group>
                        <Accordion defaultActiveKey="0">

                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Informations de facturation
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Nom</Form.Label>
                                                <Form.Control type="text" placeholder="ben foulen" onChange={(e) => { onChangeFormAddBilling("last_name", e.target.value) }} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Prénom</Form.Label>
                                                <Form.Control type="text" placeholder="foulen" onChange={(e) => { onChangeFormAddBilling("first_name", e.target.value) }} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Tél</Form.Label>
                                                <Form.Control type="text" placeholder="216 xx xxx xxx" onChange={(e) => { onChangeFormAddBilling("phone", e.target.value) }} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Adresse électronique</Form.Label>
                                                <Form.Control type="email" placeholder="foulen.benfoulen@gmail.com" onChange={(e) => { onChangeFormAddBilling("email", e.target.value) }} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Pays</Form.Label>
                                                <Form.Control type="text" placeholder="Tunisie" onChange={(e) => { onChangeFormAddBilling("country", e.target.value) }} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Gouvernaurat</Form.Label>
                                                <Form.Control type="text" placeholder="Tunis" onChange={(e) => { onChangeFormAddBilling("city", e.target.value) }} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Code postal</Form.Label>
                                                <Form.Control type="text" placeholder="3062" onChange={(e) => { onChangeFormAddBilling("postcode", e.target.value) }} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Adresse 1</Form.Label>
                                                <Form.Control type="text" placeholder="chotrana rue .." onChange={(e) => { onChangeFormAddBilling("address_1", e.target.value) }} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>adresse 2</Form.Label>
                                                <Form.Control type="text" placeholder="votre adresse" onChange={(e) => { onChangeFormAddBilling("address_2", e.target.value) }} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Société</Form.Label>
                                                <Form.Control type="text" placeholder="" onChange={(e) => { onChangeFormAddBilling("company", e.target.value) }} />
                                            </Form.Group>

                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>



                        <Accordion defaultActiveKey="0">

                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Informations de livraison
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Nom</Form.Label>
                                                <Form.Control type="text" placeholder="ben foulen" onChange={(e) => { onChangeFormAddShipping("last_name", e.target.value) }} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Prénom</Form.Label>
                                                <Form.Control type="text" placeholder="foulen" onChange={(e) => { onChangeFormAddShipping("first_name", e.target.value) }} />
                                            </Form.Group>


                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Pays</Form.Label>
                                                <Form.Control type="text" placeholder="Tunisie" onChange={(e) => { onChangeFormAddShipping("country", e.target.value) }} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Gouvernaurat</Form.Label>
                                                <Form.Control type="text" placeholder="Tunis" onChange={(e) => { onChangeFormAddShipping("city", e.target.value) }} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Code postal</Form.Label>
                                                <Form.Control type="text" placeholder="3062" onChange={(e) => { onChangeFormAddShipping("postcode", e.target.value) }} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Adresse 1</Form.Label>
                                                <Form.Control type="text" placeholder="chotrana rue .." onChange={(e) => { onChangeFormAddShipping("address_1", e.target.value) }} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>adresse 2</Form.Label>
                                                <Form.Control type="text" placeholder="votre adresse" onChange={(e) => { onChangeFormAddShipping("address_2", e.target.value) }} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Société</Form.Label>
                                                <Form.Control type="text" placeholder="" onChange={(e) => { onChangeFormAddShipping("company", e.target.value) }} />
                                            </Form.Group>

                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>



                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" onClick={() => { toggleAddCustomer(); }}>
                        Annuler
</button>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" onClick={() => { toggleAddCustomer(); console.log(customerAddData); props.addCustomer(customerAddData); getData() }}>
                        Ajouter
</button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" scrollable="true" onHide={() => setModalDetailsState(false)} show={ModalDetailsState}>
                <Modal.Body>
                    {selectedCustomer.hasOwnProperty("first_name") ? (
                        <div className="container">
                            <div className="row">
                                <div className="customer-simple-infos-picture-data-modal col-md-6 ">
                                    <img className="customer-simple-infos-picture-modal" src={selectedCustomer.avatar_url}></img>
                                    <div className="customer-simple-infos-data-modal">
                                        <div className="customer-simple-infos-data-username-modal">{selectedCustomer.username}</div>
                                        <div className="customer-simple-infos-data-email-modal">{selectedCustomer.email}</div>
                                    </div>
                                </div>
                                <div className="customer-simple-infos-points-modal col-md-2 offset-4  "> <div>{selectedCustomer.hasOwnProperty("meta_data") ? selectedCustomer.meta_data[0].value : 0}</div>
                                    <div> points</div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="customer-personal-info-modal col-md-12">
                                    <div className="modal-section-title">Informations personelles</div>
                                    <div className="customer-personal-info-modal-row ">
                                        <div className="customer-simple-infos-data-username-modal">Nom:</div>
                                        <div className="customer-simple-infos-data-email-modal">{selectedCustomer.last_name}</div>
                                    </div>
                                    <div className="customer-personal-info-modal-row ">
                                        <div className="customer-simple-infos-data-username-modal">Prénom:</div>
                                        <div className="customer-simple-infos-data-email-modal">{selectedCustomer.first_name}</div>
                                    </div>
                                    <div className="customer-personal-info-modal-row">
                                        <div className="customer-simple-infos-data-username-modal">Email:</div>
                                        <div className="customer-simple-infos-data-email-modal">{selectedCustomer.email}</div>
                                    </div>
                                </div>
                                <div className=" col-md-6">
                                    <div className="customer-billing-shipping">
                                        <div className="modal-section-title">Information de livraison</div>
                                        <div className="customer-personal-info-modal-row">
                                            <div className="customer-simple-infos-data-username-modal">Nom:</div>
                                            <div className="customer-simple-infos-data-email-modal">{selectedCustomer.shipping.last_name}</div>
                                        </div>
                                        <div className="customer-personal-info-modal-row">
                                            <div className="customer-simple-infos-data-username-modal">Prénom:</div>
                                            <div className="customer-simple-infos-data-email-modal">{selectedCustomer.shipping.first_name}</div>
                                        </div>
                                        <div className="customer-personal-info-modal-row">
                                            <div className="customer-simple-infos-data-username-modal">Email:</div>
                                            <div className="customer-simple-infos-data-email-modal">{selectedCustomer.shipping.email}</div>
                                        </div>
                                        <div className="customer-personal-info-modal-row">
                                            <div className="customer-simple-infos-data-username-modal">Tél:</div>
                                            <div className="customer-simple-infos-data-email-modal">{selectedCustomer.shipping.phone}</div>
                                        </div>
                                        <div className="customer-personal-info-modal-row">
                                            <div className="customer-simple-infos-data-username-modal">Pays:</div>
                                            <div className="customer-simple-infos-data-email-modal">{selectedCustomer.shipping.country}</div>
                                        </div>
                                        <div className="customer-personal-info-modal-row">
                                            <div className="customer-simple-infos-data-username-modal">Gouvernaurat:</div>
                                            <div className="customer-simple-infos-data-email-modal">{selectedCustomer.shipping.state}</div>
                                        </div>
                                        <div className="customer-personal-info-modal-row">
                                            <div className="customer-simple-infos-data-username-modal">Adresse 1:</div>
                                            <div className="customer-simple-infos-data-email-modal">{selectedCustomer.shipping.address_1}</div>
                                        </div>
                                        <div className="customer-personal-info-modal-row">
                                            <div className="customer-simple-infos-data-username-modal">Adresse 2:</div>
                                            <div className="customer-simple-infos-data-email-modal">{selectedCustomer.shipping.address_2}</div>
                                        </div>
                                        <div className="customer-personal-info-modal-row">
                                            <div className="customer-simple-infos-data-username-modal">Société:</div>
                                            <div className="customer-simple-infos-data-email-modal">{selectedCustomer.shipping.company}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-md-6">
                                    <div className="customer-billing-shipping ">
                                        <div className="modal-section-title">Information de facturation</div>
                                        <div className="customer-personal-info-modal-row">
                                            <div className="customer-simple-infos-data-username-modal">Nom:</div>
                                            <div className="customer-simple-infos-data-email-modal">{selectedCustomer.billing.last_name}</div>
                                        </div>
                                        <div className="customer-personal-info-modal-row">
                                            <div className="customer-simple-infos-data-username-modal">Prénom:</div>
                                            <div className="customer-simple-infos-data-email-modal">{selectedCustomer.billing.first_name}</div>
                                        </div>
                                        <div className="customer-personal-info-modal-row">
                                            <div className="customer-simple-infos-data-username-modal">Email:</div>
                                            <div className="customer-simple-infos-data-email-modal">{selectedCustomer.billing.email}</div>
                                        </div>
                                        <div className="customer-personal-info-modal-row">
                                            <div className="customer-simple-infos-data-username-modal">Tél:</div>
                                            <div className="customer-simple-infos-data-email-modal">{selectedCustomer.billing.phone}</div>
                                        </div>
                                        <div className="customer-personal-info-modal-row">
                                            <div className="customer-simple-infos-data-username-modal">Pays:</div>
                                            <div className="customer-simple-infos-data-email-modal">{selectedCustomer.billing.country}</div>
                                        </div>
                                        <div className="customer-personal-info-modal-row">
                                            <div className="customer-simple-infos-data-username-modal">Gouvernaurat:</div>
                                            <div className="customer-simple-infos-data-email-modal">{selectedCustomer.billing.state}</div>
                                        </div>
                                        <div className="customer-personal-info-modal-row">
                                            <div className="customer-simple-infos-data-username-modal">Adresse 1:</div>
                                            <div className="customer-simple-infos-data-email-modal">{selectedCustomer.billing.address_1}</div>
                                        </div>
                                        <div className="customer-personal-info-modal-row">
                                            <div className="customer-simple-infos-data-username-modal">Adresse 2:</div>
                                            <div className="customer-simple-infos-data-email-modal">{selectedCustomer.billing.address_2}</div>
                                        </div>
                                        <div className="customer-personal-info-modal-row">
                                            <div className="customer-simple-infos-data-username-modal">Code postal:</div>
                                            <div className="customer-simple-infos-data-email-modal">{selectedCustomer.billing.postcode}</div>
                                        </div>
                                        <div className="customer-personal-info-modal-row">
                                            <div className="customer-simple-infos-data-username-modal">Société:</div>
                                            <div className="customer-simple-infos-data-email-modal">{selectedCustomer.billing.company}</div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    ) : null}
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" onClick={() => { toggleDetailsCustomer({}); }}>
                        Fermer
</button>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" onClick={() => { toggleDetailsCustomer(selectedCustomer); toggleUpdateCustomer(selectedCustomer) }}>
                        Modifier
</button>
                </Modal.Footer>
            </Modal>

            <Modal onHide={() => toggleDeleteCustomer()} show={ModalDeleteState}>
                <Modal.Header><Modal.Title>suppression d'un client</Modal.Title></Modal.Header>
                <Modal.Body>
                    <p>Voulez vous vraiment supprimer {selectedCustomer.username} ?</p>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" onClick={() => { toggleDeleteCustomer({}); }}>
                        Annuler
</button>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" onClick={() => { toggleDeleteCustomer({}); props.deleteCustomer(selectedCustomer.id, rowsPerPage, page); setSelectedCustomer({}); getData(); }}>
                        supprimer
</button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" scrollable="true" onHide={() => setModalUpdateState(false)} show={ModalUpdateState}>
                <Modal.Header><Modal.Title>Modification des informations client</Modal.Title></Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Adresse électronique</Form.Label>
                            <Form.Control type="email" placeholder="foulen.benfoulen@gmail.com"   defaultValue={customerDataUpdate.email} onChange={(e) => { onChangeFormUpdate("email", e.target.value) }} />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" placeholder="ben foulen" defaultValue={customerDataUpdate.last_name} onChange={(e) => { onChangeFormUpdate("last_name", e.target.value) }} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Prenom</Form.Label>
                            <Form.Control type="text" placeholder="foulen" defaultValue={customerDataUpdate.first_name} onChange={(e) => { onChangeFormUpdate("first_name", e.target.value) }} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nom d'utilisateur</Form.Label>
                            <Form.Control type="text" placeholder="ben foulen" defaultValue={customerDataUpdate.username} onChange={(e) => { onChangeFormUpdate("username", e.target.value) }} />
                        </Form.Group>
                        <Accordion defaultActiveKey="0">

                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Informations de facturation
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Nom</Form.Label>
                                                <Form.Control type="text" placeholder="ben foulen" defaultValue={customerDataUpdate.billing.last_name} onChange={(e) => { onChangeFormUpdateBilling("last_name", e.target.value) }} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Prénom</Form.Label>
                                                <Form.Control type="text" placeholder="foulen" defaultValue={customerDataUpdate.billing.first_name} onChange={(e) => { onChangeFormUpdateBilling("first_name", e.target.value) }} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Tél</Form.Label>
                                                <Form.Control type="text" placeholder="216 xx xxx xxx" defaultValue={customerDataUpdate.billing.phone} onChange={(e) => { onChangeFormUpdateBilling("phone", e.target.value) }} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Adresse électronique</Form.Label>
                                                <Form.Control type="email" placeholder="foulen.benfoulen@gmail.com" defaultValue={customerDataUpdate.billing.email} onChange={(e) => { onChangeFormUpdateBilling("email", e.target.value) }} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Pays</Form.Label>
                                                <Form.Control type="text" placeholder="Tunisie" defaultValue={customerDataUpdate.billing.country} onChange={(e) => { onChangeFormUpdateBilling("country", e.target.value) }} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Gouvernaurat</Form.Label>
                                                <Form.Control type="text" placeholder="Tunis" defaultValue={customerDataUpdate.billing.city} onChange={(e) => { onChangeFormUpdateBilling("city", e.target.value) }} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Code postal</Form.Label>
                                                <Form.Control type="text" placeholder="3062" defaultValue={customerDataUpdate.billing.postcode} onChange={(e) => { onChangeFormUpdateBilling("postcode", e.target.value) }} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Adresse 1</Form.Label>
                                                <Form.Control type="text" placeholder="chotrana rue .." defaultValue={customerDataUpdate.billing.address_1} onChange={(e) => { onChangeFormUpdateBilling("address_1", e.target.value) }} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>adresse 2</Form.Label>
                                                <Form.Control type="text" placeholder="votre adresse" defaultValue={customerDataUpdate.billing.address_2} onChange={(e) => { onChangeFormUpdateBilling("address_2", e.target.value) }} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Société</Form.Label>
                                                <Form.Control type="text" placeholder="" defaultValue={customerDataUpdate.billing.company} onChange={(e) => { onChangeFormUpdateBilling("company", e.target.value) }} />
                                            </Form.Group>

                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>



                        <Accordion defaultActiveKey="0">

                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Informations de livraison
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Nom</Form.Label>
                                                <Form.Control type="text" placeholder="ben foulen" defaultValue={customerDataUpdate.shipping.last_name} onChange={(e) => { onChangeFormUpdateShipping("last_name", e.target.value) }} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Prénom</Form.Label>
                                                <Form.Control type="text" placeholder="foulen" defaultValue={customerDataUpdate.shipping.first_name} onChange={(e) => { onChangeFormUpdateShipping("first_name", e.target.value) }} />
                                            </Form.Group>


                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Pays</Form.Label>
                                                <Form.Control type="text" placeholder="Tunisie" defaultValue={customerDataUpdate.shipping.country} onChange={(e) => { onChangeFormUpdateShipping("country", e.target.value) }} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Gouvernaurat</Form.Label>
                                                <Form.Control type="text" placeholder="Tunis" defaultValue={customerDataUpdate.shipping.city} onChange={(e) => { onChangeFormUpdateShipping("city", e.target.value) }} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Code postal</Form.Label>
                                                <Form.Control type="text" placeholder="3062" defaultValue={customerDataUpdate.shipping.postcode} onChange={(e) => { onChangeFormUpdateShipping("postcode", e.target.value) }} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Adresse 1</Form.Label>
                                                <Form.Control type="text" placeholder="chotrana rue .." defaultValue={customerDataUpdate.shipping.address_1} onChange={(e) => { onChangeFormUpdateShipping("address_1", e.target.value) }} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>adresse 2</Form.Label>
                                                <Form.Control type="text" placeholder="votre adresse" defaultValue={customerDataUpdate.shipping.address_2} onChange={(e) => { onChangeFormUpdateShipping("address_2", e.target.value) }} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Société</Form.Label>
                                                <Form.Control type="text" placeholder="" defaultValue={customerDataUpdate.shipping.company} onChange={(e) => { onChangeFormUpdateShipping("company", e.target.value) }} />
                                            </Form.Group>

                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" onClick={() => { toggleUpdateCustomer({}); }}>
                        Annuler
</button>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" onClick={() => { console.log(customerDataUpdate);props.updateCustomer(customerDataUpdate.id, customerDataUpdate, rowsPerPage, page);  toggleUpdateCustomer({}); setSelectedCustomer({}); getData(); }}>
                        Modifier
</button>
                </Modal.Footer>
            </Modal>


        </div>


    )
}



const mapStateToProps = (state) => {
    // console.log("in state",state);
    return { user: state.Auth.current_user, customers: state.Customer.customers, total_customers: state.Customer.total, total_customer_pages: state.Customer.total_pages };
};


const mapDispatchProps = (dispatch) => {
    return {
        getCustomers: (per_page, page) => {
            dispatch(GetAllCustomers(per_page, page))
        },
        deleteCustomer: (id, per_page, page) => { dispatch(DeleteCustomer(id, per_page, page)) },
        addCustomer: (customer) => {
            dispatch(AddCustomer(customer))
        },
        updateCustomer: (id, customer) => {
            dispatch(UpdateCustomer(id, customer))
        },
    }

};


export default connect(mapStateToProps, mapDispatchProps)(CustomersList)


