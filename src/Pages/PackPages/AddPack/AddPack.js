import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { CustomFormButton } from "../../../Components/Buttons/CustomButton";
import FormAdd from "../../../Components/forms/FormAdd";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const groupeTitles = [
  {
    title: "gestion user",
    features: [
      { title: "add user", checked: true },
      { title: "edit user", checked: false },
      { title: "all user", checked: false },
    ],
  },
  {
    title: "gestion produit",
    features: [
      { title: "add produit", checked: false },
      { title: "edit produit", checked: false },
    ],
  },
  {
    title: "gestion commande",
    features: [
      { title: "all commande", checked: false },
      { title: "add commande", checked: false },
    ],
  },
  {
    title: "gestion stock",
    features: [
      { title: "add stock", checked: false },
      { title: "edit stock", checked: false },
    ],
  },
];

export default function AddPack() {
  const [pack, setPack] = useState({});
  const [features, setFeatures] = useState([]);

  const onChange = (attribute, value) => {
    let pack1 = pack;
    pack1[attribute] = value;
    setPack(pack1);
  };

  const handleChangeFeature = (event, index1, index2) => {
    console.log(
      " handleChangeFeature : name:",
      event.target.name,
      " checked :",
      event.target.checked
    );
    console.log("feature modifier :", features[index1].features[index2]);
    let features1 = features;
    features1[index1].features[index2].checked = event.target.checked;
    setFeatures(features1);
  };

  return (
    <FormAdd Title="Ajout d'un pack" className="col-md-6">
      <div>
        <TextField
          id="title"
          required
          style={{ width: "100%" }}
          variant="outlined"
          label="Nom"
          value={pack.title}
          margin="normal"
          onChange={(event) => {
            onChange("title", event.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          required
          id="description"
          style={{ width: "100%" }}
          label="Description"
          margin="normal"
          multiline
          variant="outlined"
          value={pack.description}
          onChange={(event) => {
            onChange("discription", event.target.value);
          }}
        />
      </div>

      <div>
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={groupeTitles}
          onChange={(event, value) => {
            setFeatures(value);
            console.log("Autocomplete :", value);
          }}
          getOptionLabel={(option) => option.title}
          renderOption={(option, { selected }) => (
            <React.Fragment>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                //color="pramiry"
                checked={selected}
              />
              {option.title}
            </React.Fragment>
          )}
          style={{ width: "100%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              margin="normal"
              label="Fonctionnalités"
            />
          )}
        />
      </div>

      {features.map((feature, index1) => {
        return (
          <div>
            <FormLabel component="legend">{feature.title}</FormLabel>
            <FormGroup row>
              {feature.features.map((fea, index2) => {
                return (
                  <FormControlLabel
                    control={
                      <Checkbox
                        //checked={fea.checked}
                        value={fea.checked}
                        onChange={(event) => {
                          handleChangeFeature(event, index1, index2);
                        }}
                        name={fea.title}
                      />
                    }
                    label={fea.title}
                  />
                );
              })}
            </FormGroup>
          </div>
        );
      })}
      <div>
        <TextField
          required
          id="prix"
          style={{ width: "100%" }}
          variant="outlined"
          label="Prix"
          value={pack.prix}
          type="number"
          margin="normal"
          onChange={(event) => {
            onChange("prix", event.target.value);
          }}
        />
      </div>

      <div>
        <CustomFormButton
          value="Ajouter"
          width="50%"
          onClick={() => {
            console.log("clicked pack jouter : ", pack);
            console.log("clicked feature: ", features);
          }}
        ></CustomFormButton>
      </div>
    </FormAdd>
  );
}
