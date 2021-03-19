import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import FormAdd from "../../../Components/forms/FormAdd";

const groupeTitles = [
  "gestion user",
  "gestion produits",
  "gestion commande",
  "gestion stock",
];

export default function AddFeaturePage(props) {
  const [feature, setFeature] = useState({});
  const widh = "col-md-6 form-content";
  const onChange = (attribute, value) => {
    let feature1 = feature;
    feature1[attribute] = value;
    setFeature(feature1);
  };

  return (
    <FormAdd Title="Ajout d'une fonctionnalité" className="col-md-6">
      <div>
        <TextField
          id="title"
          required
          style={{ width: "100%" }}
          variant="outlined"
          label="Nom"
          value={feature.title}
          margin="normal"
          onChange={(event) => {
            onChange("title", event.target.value);
          }}
        />
      </div>

      <div>
        <Autocomplete
          id="free-solo-demo"
          style={{ width: "100%" }}
          freeSolo
          value={feature.groupe_title}
          onChange={(event) => {
            onChange("groupe_title", event.target.value);
          }}
          options={groupeTitles.map((option) => option)}
          renderInput={(params) => (
            <TextField
              {...params}
              required
              label="Nom du groupe"
              margin="normal"
              variant="outlined"
            />
          )}
        />
      </div>
      <div>
        <TextField
          required
          id="title"
          style={{ width: "100%" }}
          variant="outlined"
          label="Prix"
          value={feature.prix}
          type="number"
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
          value={feature.description}
          onChange={(event) => {
            onChange("discription", event.target.value);
          }}
        />
      </div>
      <div>
        <button
          type="submit"
          style={{ width: "70%" }}
          className="button"
          onClick={() => {
            console.log("feature jouter :", feature);
          }}
        >
          ajouter
        </button>
      </div>
    </FormAdd>
  );
}
