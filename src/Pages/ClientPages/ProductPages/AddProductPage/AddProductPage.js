import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FormAdd from "../../../../Components/forms/FormAdd";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import Autocomplete from "@material-ui/lab/Autocomplete";
import { connect } from "react-redux";
import { ClientGetAllCategories } from "../../../../Actions/Category";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { ClientGetAllTags } from "../../../../Actions/Tags";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "./AddProductPage.css";
import Chip from "@material-ui/core/Chip";

import {
  ClientGetAllProducts,
  ClientGetAllProducts2,
} from "../../../../Actions/Product";
import { productData } from "../../../../Data/ProductData";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function AddProductPage(props) {
  const {
    allCategories,
    token,
    totalCategory,
    totalPagesCategory,
    allTags,
    totalTags,
    totalPagesTags,
    allProducts,
    totalProducts,
    totalPages,
  } = props;
  const [product, setproduct] = useState({});

  const [attributes, setattributes] = useState([
    { nom: "contenance", valeurs: ["jfjhf", "jfjf", "didf"] },
  ]);

  const onChange = (attribute, value) => {
    let product1 = product;
    product1[attribute] = value;
    setproduct(product1);
  };

  const handleAddAttribute = (value) => {};
  const handleDelete = (data) => {
    let att = attributes;
    // att[0].valeurs.slice(index, 1);
    setattributes(att);
  };

  useEffect(() => {
    let product1 = product;
    product1.name = "test name";
    product1.description = "test description";
    setproduct(product1);

    console.log("in use effect");
    props.GetAllCategories(token, 1, 100);
    props.GetAllTags(token, 1, 100);
    props.GetAllProducts(token);
  }, []);

  const getSteps = () => {
    return [
      "Informations générale",
      "Catégories et étiquettes",
      "Informations du produit",
      "Image du produit",
    ];
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const AddProduct = () => {
    console.log("product ajouter :", product);
  };

  return (
    <div className="container">
      <Card>
        <Card.Body>
          <div>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          {activeStep === 0 ? (
            <div>
              <div>
                <TextField
                  id="name"
                  style={{ width: "100%" }}
                  variant="outlined"
                  label="Nom du produit"
                  defaultValue={product.name}
                  margin="normal"
                  onChange={(event) => {
                    onChange("name", event.target.value);
                  }}
                />
              </div>
              <div>
                <TextField
                  id="slug"
                  style={{ width: "100%" }}
                  variant="outlined"
                  label="slug"
                  defaultValue={product.slug}
                  margin="normal"
                  onChange={(event) => {
                    onChange("slug", event.target.value);
                  }}
                />
              </div>
              <div>
                <TextField
                  required
                  id="description"
                  style={{ width: "100%" }}
                  label="Description du produit"
                  margin="normal"
                  multiline
                  variant="outlined"
                  defaultValue={product.description}
                  onChange={(event) => {
                    onChange("description", event.target.value);
                  }}
                />
              </div>
              <div>
                <TextField
                  required
                  id="short_description"
                  style={{ width: "100%" }}
                  label="Description courte du produit"
                  margin="normal"
                  multiline
                  variant="outlined"
                  defaultValue={product.short_description}
                  onChange={(event) => {
                    onChange("short_description", event.target.value);
                  }}
                />
              </div>
            </div>
          ) : null}

          {activeStep === 1 ? (
            <div>
              <div>
                <Autocomplete
                  multiple
                  id="checkboxes-categories"
                  options={allCategories}
                  onChange={(event, value) => {
                    onChange("categories", value);
                    console.log("Autocomplete :", value);
                  }}
                  getOptionLabel={(option) => option.name}
                  renderOption={(option, { selected }) => (
                    <React.Fragment>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        //color="pramiry"
                        checked={selected}
                      />
                      {option.name}
                    </React.Fragment>
                  )}
                  style={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      margin="normal"
                      label="Catégories"
                    />
                  )}
                />
              </div>
              <div>
                <Autocomplete
                  multiple
                  id="checkboxes-tags"
                  options={allTags}
                  onChange={(event, value) => {
                    onChange("tags", value);
                    console.log("Autocomplete :", value);
                  }}
                  getOptionLabel={(option) => option.name}
                  renderOption={(option, { selected }) => (
                    <React.Fragment>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        //color="pramiry"
                        checked={selected}
                      />
                      {option.name}
                    </React.Fragment>
                  )}
                  style={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      margin="normal"
                      label="Etiquettes"
                    />
                  )}
                />
              </div>
            </div>
          ) : null}
          {activeStep === 2 ? (
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                  <Form.Label>Type de produit</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      onChange("type", event.target.value);
                    }}
                    as="select"
                    defaultValue={product.type}
                  >
                    <option value="simple">Produit simple</option>
                    <option value="variable">Produit variable</option>
                    <option value="groupés">Produits groupés</option>
                    <option value="externe">Produit externe/affiliation</option>
                    <option value="intelligent">Lot intelligent</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Général</Typography>
                </AccordionSummary>
                <AccordionDetails className="col-md-12">
                  <div className="col-md-12">
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Tarif régulier</Form.Label>
                        <Form.Control />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Tarif promo</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Form.Row>
                    <Form.Label>Dates de promo</Form.Label>

                    <div className="col-md-12">
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Debut</Form.Label>
                          <Form.Control type="date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label>Fin</Form.Label>
                          <Form.Control type="date" />
                        </Form.Group>
                      </Form.Row>
                    </div>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>URL du produit</Form.Label>
                        <Form.Control />
                        <Form.Text className="text-muted">
                          Saisir l’URL externe vers le produit.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Libelle du bouton</Form.Label>
                        <Form.Control />
                        <Form.Text className="text-muted">
                          Ce texte sera visible dans le bouton de lien vers le
                          produit externe.
                        </Form.Text>
                      </Form.Group>
                    </Form.Row>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Inventaire</Typography>
                </AccordionSummary>
                <AccordionDetails className="col-md-12">
                  <div className="col-md-12">
                    <Form.Group controlId="formGridPassword">
                      <Form.Label>Unité de Gestion de Stock</Form.Label>
                      <Form.Control />
                      <Form.Text className="text-muted">
                        UGS fait référence à l’Unité de Gestion de Stock, un
                        identifiant unique pour chaque produit/service distinct
                        qui peut être vendu.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>État du stock</Form.Label>
                      <Form.Control as="select">
                        <option>En stock</option>
                        <option>Repture de stock</option>
                        <option>En réapprovisionnement</option>
                      </Form.Control>
                      <Form.Text className="text-muted">
                        Contrôle si le produit est listé comme « en stock » ou «
                        en rupture » sur le site.
                      </Form.Text>
                    </Form.Group>

                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Quantité en stock </Form.Label>
                        <Form.Control />
                        <Form.Text className="text-muted">
                          Quantité du stock. Si c’est un produit variable cette
                          valeur sera utilisée pour contrôler le stock pour
                          toutes les variations, à moins que vous définissiez le
                          stock au niveau de la variation.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>
                          Autoriser les commandes en réapprovisionnement ?
                        </Form.Label>
                        <Form.Control />
                        <Form.Text className="text-muted">
                          En cas de gestion de stock, cela définit si les
                          ruptures de stock sont autorisées ou non. Si actif, la
                          quantité de stock peut être inférieure à 0.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Seuil de stock faible</Form.Label>
                        <Form.Control />
                        <Form.Text className="text-muted">
                          Lorsque le stock atteindra cette valeur, vous recevrez
                          une notification par e-mail.
                        </Form.Text>
                      </Form.Group>
                    </Form.Row>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Expédition</Typography>
                </AccordionSummary>
                <AccordionDetails className="col-md-12">
                  <div className="col-md-12">
                    <Form.Group controlId="formGridPassword">
                      <Form.Label>Poids (kg)</Form.Label>
                      <Form.Control />
                      <Form.Text className="text-muted">
                        Poids au format décimal
                      </Form.Text>
                    </Form.Group>
                    <Form.Label>Dimensions (cm)</Form.Label>

                    <div className="col-md-12">
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Label>Longueur</Form.Label>
                          <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Label>Largeur</Form.Label>
                          <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                          <Form.Label>Hauteur</Form.Label>
                          <Form.Control />
                        </Form.Group>
                      </Form.Row>
                    </div>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Classe d’expédition</Form.Label>
                      <Form.Control as="select">
                        <option>Pas de classe d'expédition</option>
                      </Form.Control>
                      <Form.Text className="text-muted">
                        Les classes d’expédition sont utilisées par certains
                        modes d’expédition pour grouper des produits similaires.
                      </Form.Text>
                    </Form.Group>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Produits liés</Typography>
                </AccordionSummary>
                <AccordionDetails className="col-md-12">
                  <div className="col-md-12">
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Produits suggérés</Form.Label>
                      <Autocomplete
                        multiple
                        id="checkboxes-tags"
                        options={allProducts}
                        onChange={(event, value) => {
                          // onChange("tags", event.target.value);
                          console.log("Autocomplete :", value);
                        }}
                        getOptionLabel={(option) => option.name}
                        renderOption={(option, { selected }) => (
                          <React.Fragment>
                            <Checkbox
                              icon={icon}
                              checkedIcon={checkedIcon}
                              style={{ marginRight: 8 }}
                              //color="pramiry"
                              checked={selected}
                            />
                            {option.name}
                          </React.Fragment>
                        )}
                        style={{ width: "100%" }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            margin="normal"
                          />
                        )}
                      />
                      <Form.Text className="text-muted">
                        Les produits suggérés sont des produits que vous
                        recommandez à la place de ceux actuellement vus, par
                        exemple, les produits qui sont plus rentables, de
                        meilleure qualité ou plus chers.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Ventes croisées</Form.Label>
                      <Autocomplete
                        multiple
                        id="checkboxes-tags"
                        options={allProducts}
                        onChange={(event, value) => {
                          // onChange("tags", event.target.value);
                          console.log("Autocomplete :", value);
                        }}
                        getOptionLabel={(option) => option.name}
                        renderOption={(option, { selected }) => (
                          <React.Fragment>
                            <Checkbox
                              icon={icon}
                              checkedIcon={checkedIcon}
                              style={{ marginRight: 8 }}
                              //color="pramiry"
                              checked={selected}
                            />
                            {option.name}
                          </React.Fragment>
                        )}
                        style={{ width: "100%" }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            margin="normal"
                          />
                        )}
                      />
                      <Form.Text className="text-muted">
                        Les ventes croisées sont des produits que vous mettez en
                        avant dans le panier, basés sur le produit actuel.
                      </Form.Text>
                    </Form.Group>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Attributs</Typography>
                </AccordionSummary>
                <AccordionDetails className="col-md-12">
                  <div className="col-md-12">
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Nom</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Nom</Form.Label>
                      <Form.Control />
                      <button className="add-chip-button" onClick>
                        Ajouter un attribut
                      </button>
                    </Form.Group>
                    <Row>
                      <input
                        type="text"
                        className="add-chip-input"
                        placeholder="longueur"
                      />

                      <button className="add-chip-button" onClick>
                        Ajouter un attribut
                      </button>
                    </Row>
                    <div className="col-md-12 container-chips-attributes">
                      {attributes[0].valeurs.map((data) => {
                        return (
                          <Chip
                            label={data}
                            onDelete={handleDelete}
                            color="primary"
                            variant="outlined"
                          />
                        );
                      })}
                    </div>

                    <div className="container_add_attribut">
                      <Button variant="outline-success">
                        Ajouter un attribut
                      </Button>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Variations</Typography>
                </AccordionSummary>
                <AccordionDetails className="col-md-12"></AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Produits groupés</Typography>
                </AccordionSummary>
                <AccordionDetails className="col-md-12"></AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Avancé</Typography>
                </AccordionSummary>
                <AccordionDetails className="col-md-12">
                  <div className="col-md-12">
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Note de commande</Form.Label>
                      <Form.Control />
                      <Form.Text className="text-muted">
                        Saisissez une note facultative à envoyer au client après
                        l’achat.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Ordre du menu</Form.Label>
                      <Form.Control />
                      <Form.Text className="text-muted">
                        Ordre personnalisé.
                      </Form.Text>
                    </Form.Group>
                  </div>
                </AccordionDetails>
              </Accordion>
            </Form>
          ) : null}
          <div className="col-md-12">
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Précédant
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Terminer" : "Suivant"}
            </Button>
            <Button variant="contained" color="primary" onClick={AddProduct}>
              Ajouter
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    allCategories: state.Category.allCategories,
    totalCategory: state.Category.totalCategory,
    totalPagesCategory: state.Category.totalPagesCategory,
    allTags: state.Tags.allTags,
    totalTags: state.Tags.totalTags,
    totalPagesTags: state.Tags.totalPagesTags,
    token: state.Auth.Authorization,
    allProducts: state.Product.allProducts,
    totalProducts: state.Product.totalProducts,
    totalPages: state.Product.totalPages,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    GetAllCategories: (token, page, per_page) => {
      dispatch(ClientGetAllCategories(token, page, per_page));
    },
    GetAllTags: (token, page, per_page) => {
      dispatch(ClientGetAllTags(token, page, per_page));
    },
    GetAllProducts: (token) => {
      dispatch(ClientGetAllProducts(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchProps)(AddProductPage);
