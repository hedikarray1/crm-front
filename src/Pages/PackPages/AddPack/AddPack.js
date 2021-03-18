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

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const groupeTitles = [
  {
    title: "gestion user",
    fonctionallité: [
      { title: "add user", checked: false },
      { title: "edit user", checked: false },
      { title: "all user", checked: false },
    ],
  },
  {
    title: "gestion produit",
    fonctionallité: [
      { title: "add produit", checked: false },
      { title: "edit produit", checked: false },
    ],
  },
  {
    title: "gestion commande",
    fonctionallité: [
      { title: "all commande", checked: false },
      { title: "add commande", checked: false },
    ],
  },
  {
    title: "gestion stock",
    fonctionallité: [
      { title: "add stock", checked: false },
      { title: "edit stock", checked: false },
    ],
  },
];

export default function AddPack() {
  const [pack, setPack] = useState({});
  const [feature, setFeature] = useState([]);
  const widh = "col-md-6 form-content";

  const onChange = (attribute, value) => {
    let pack1 = pack;
    pack1[attribute] = value;
    setPack(pack1);
  };

  const onChangeFeature = (event, value) => {
    setFeature(value);
    console.log("onChangeFeature :", feature);
  };

  return (
    <form className={widh} onSubmit={console.log("pack ajouter :", pack)}>
      <p>Ajouter un pack</p>
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
          onInputChange={onChangeFeature}
          value={feature}
          disableCloseOnSelect
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
      {/*    <div>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Assign responsibility</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
              label="Gilad Gray"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={jason}
                  onChange={handleChange}
                  name="jason"
                />
              }
              label="Jason Killian"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange}
                  name="antoine"
                />
              }
              label="Antoine Llorca"
            />
          </FormGroup>
        </FormControl>
      </div>
            */}
      <div>
        <TextField
          required
          id="title"
          style={{ width: "100%" }}
          variant="outlined"
          label="Prix"
          value={pack.prix}
          type="number"
          margin="normal"
          onChange={(event) => {
            onChange("title", event.target.value);
          }}
        />
      </div>
      <div>
        <button
          type="submit"
          style={{ width: "70%" }}
          className="button"
          onClick={() => {
            console.log("pack jouter :", pack);
          }}
        >
          ajouter
        </button>
      </div>
    </form>
  );
}
