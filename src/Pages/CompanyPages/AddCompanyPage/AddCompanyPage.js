import { TextField } from "@material-ui/core";
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
      <TextField
        id="title"
        className="col-md-6"
        variant="outlined"
        label="Nom de la société"
        value={company.title}
        margin="normal"
        placeholder="Nom de la société"
        onChange={(event) => {
          onChange("title", event.target.value);
        }}
      />
      <TextField
        className="col-md-6"
        id="description"
        label="Description de la société"
        placeholder="Description de la société"
        margin="normal"
        multiline
        variant="outlined"
        value={company.description}
        onChange={(event) => {
          onChange("discription", event.target.value);
        }}
      />

      <div
        className="col-md-12"
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          display: "flex",
          width: "100%",
        }}
      >
        <TextField
          className="col-md-6"
          id="description"
          label="Description de la société"
          placeholder="Description de la société"
          margin="normal"
          multiline
          variant="outlined"
          value={company.description}
          onChange={(event) => {
            onChange("discription", event.target.value);
          }}
        />
        <CustomFormButton
          value="Ajouter"
          onClick={() => {
            console.log("clicked : ", company);
          }}
        ></CustomFormButton>
      </div>
      <DropzoneArea
        className="col-md-6"
        acceptedFiles={["image/*"]}
        dropzoneText={"Faites glisser et déposez une image ici ou cliquez"}
        onChange={(files) => console.log("Files:", files)}
        filesLimit={1}
        classes="DropzoneArea"
        showAlerts={false}
      />
      <CustomFormButton
        value="Ajouter"
        width="50%"
        onClick={() => {
          console.log("clicked : ", company);
        }}
      ></CustomFormButton>
    </FormAdd>
  );
}
