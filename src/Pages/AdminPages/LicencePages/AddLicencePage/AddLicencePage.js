import { FormControl, InputLabel, Select, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { CustomFormButton } from "../../../../Components/Buttons/CustomButton";
import FormAdd from "../../../../Components/forms/FormAdd";
export default function AddLicencePage() {
  const [licence, setlicence] = useState({});

  const onChange = (attribute, value) => {
    let licence1 = licence;
    licence1[attribute] = value;
    setlicence(licence1);
  };

  return (
    <FormAdd Title="Ajout d'une licence" className="col-md-6">
      <div>
        <TextField
          id="title"
          required
          style={{ width: "100%" }}
          variant="outlined"
          label="Clé"
          value={licence.key}
          margin="normal"
          onChange={(event) => {
            onChange("key", event.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          id="date_expiration"
          required
          style={{ width: "100%" }}
          variant="outlined"
          type="date"
          label="Date d'expiration"
          hiddenLabel={true}
          value={licence.date_expiration}
          margin="normal"
          onChange={(event) => {
            onChange("date_expiration", event.target.value);
          }}
        />
      </div>
      <div>
        <FormControl
          variant="outlined"
          style={{ width: "100%" }}
          margin="normal"
        >
          <InputLabel>Pack</InputLabel>
          <Select
            native
            value={licence.pack}
            onChange={(event) => {
              onChange("pack", event.target.value);
            }}
            label="pack"
            inputProps={{
              name: "pack",
              id: "outlined-pack-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={1}>Ten</option>
            <option value={2}>Twenty</option>
            <option value={3}>Thirty</option>
          </Select>
        </FormControl>
      </div>
      <div>
        <CustomFormButton
          value="Ajouter"
          width="50%"
          onClick={() => {
            console.log("feature jouter :", licence);
          }}
        ></CustomFormButton>
      </div>
    </FormAdd>
  );
}
