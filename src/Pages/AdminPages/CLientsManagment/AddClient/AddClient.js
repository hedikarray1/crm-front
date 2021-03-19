import React, { useState } from "react";
import { CustomButton } from "../../../../Components/Buttons/CustomButton";
import FormAdd from "../../../../Components/forms/FormAdd";
import CustomformInput from "../../../../Components/Inputs/Inputs";
import "./AddClient.css";
function AddClient() {
  const [client, setClient] = useState({});

  const onChange = (attribute, value) => {
    let client1 = client;
    client1[attribute] = value;
    setClient(client1);
  };

  return (
    <FormAdd Title="Ajout d'un client" className="col-md-6">
      <CustomformInput
        label="nom"
        value={client.firstname}
        type="text"
        placeholder="hedi"
        onChange={(value) => {
          onChange("firstname", value);
        }}
      ></CustomformInput>
      <CustomformInput
        label="nom"
        value={client.firstname}
        type="text"
        placeholder="hedi"
        onChange={(value) => {
          onChange("firstname", value);
        }}
      ></CustomformInput>
      <CustomformInput
        label="nom"
        value={client.firstname}
        type="text"
        placeholder="hedi"
        onChange={(value) => {
          onChange("firstname", value);
        }}
      ></CustomformInput>
      <CustomButton
        value="Ajouter"
        onClick={() => {
          alert("clicked");
        }}
      ></CustomButton>
    </FormAdd>
  );
}

export default AddClient;
