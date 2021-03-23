import { FormControl, InputLabel, Select, TextField } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import React, { useState } from "react";
import { CustomFormButton } from "../../../Components/Buttons/CustomButton";
import FormAdd from "../../../Components/forms/FormAdd";

export default function AddCompanyPage() {
  const [company, setCompany] = useState({});

  const onChange = (attribute, value) => {
    let company1 = company;
    company1[attribute] = value;
    setCompany(company1);
  };

  return (
    <FormAdd Title="Ajout d'une société" className="col-md-6">
      <div>
        <TextField
          id="title"
          required
          style={{ width: "100%" }}
          variant="outlined"
          label="Nom"
          value={company.title}
          margin="normal"
          onChange={(event) => {
            onChange("title", event.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          id="description"
          label="Description"
          margin="normal"
          multiline
          required
          style={{ width: "100%" }}
          variant="outlined"
          value={company.description}
          onChange={(event) => {
            onChange("discription", event.target.value);
          }}
        />
      </div>
      <div>
        <FormControl
          variant="outlined"
          style={{ width: "100%" }}
          margin="normal"
        >
          <InputLabel>Licence</InputLabel>
          <Select
            native
            value={company.license}
            onChange={(event) => {
              onChange("license", event.target.value);
            }}
            label="license"
            inputProps={{
              name: "license",
              id: "outlined-license-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value="ik2dsv2uhiuhiuef">ik2dsv2uhiuhiuef</option>
            <option value="sdg252sdg2">sdg252sdg2</option>
            <option value="sd2122sd3sd3sd2">sd2122sd3sd3sd2</option>
          </Select>
        </FormControl>
      </div>

      <div>
        <FormControl
          variant="outlined"
          style={{ width: "100%" }}
          margin="normal"
        >
          <InputLabel>Administrateur</InputLabel>
          <Select
            native
            value={company.admin}
            onChange={(event) => {
              onChange("admin", event.target.value);
            }}
            label="admin"
            inputProps={{
              name: "admin",
              id: "outlined-admin-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value="houssemeddine.gabsi@gmail.com">
              houssemeddine gabsi
            </option>
            <option value="hedi.karray@gmail.com">hedi karray</option>
            <option value="skander.saidi@gmail.com">skander saidi</option>
          </Select>
        </FormControl>
      </div>

      <div>
        <DropzoneArea
          acceptedFiles={["image/*"]}
          dropzoneText={"Faites glisser et déposez une image ici ou cliquez"}
          onChange={(files) => console.log("Files:", files)}
          filesLimit={1}
          classes="DropzoneArea"
          showAlerts={false}
        />
      </div>
      <div>
        <CustomFormButton
          value="Ajouter"
          width="50%"
          onClick={() => {
            console.log("clicked : ", company);
          }}
        ></CustomFormButton>
      </div>
    </FormAdd>
  );
}
