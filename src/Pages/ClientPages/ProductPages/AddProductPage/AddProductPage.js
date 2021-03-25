import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import FormAdd from "../../../../Components/forms/FormAdd";

export default function AddProductPage() {
  const [product, setproduct] = useState({});

  const onChange = (attribute, value) => {
    let product1 = product;
    product1[attribute] = value;
    setproduct(product1);
  };

  return (
    <FormAdd Title="Ajout d'un produit" className="col-md-12">
      <div>
        <TextField
          id="name"
          required
          style={{ width: "100%" }}
          variant="outlined"
          label="Nom du produit"
          value={product.name}
          margin="normal"
          onChange={(event) => {
            onChange("name", event.target.value);
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
          value={product.description}
          onChange={(event) => {
            onChange("description", event.target.value);
          }}
        />
      </div>
    </FormAdd>
  );
}
