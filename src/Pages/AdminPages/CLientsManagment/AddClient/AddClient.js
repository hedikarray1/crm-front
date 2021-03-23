import {
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Select,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { DropzoneArea } from "material-ui-dropzone";
import React, { useState } from "react";
import {
  CustomButton,
  CustomFormButton,
} from "../../../../Components/Buttons/CustomButton";
import FormAdd from "../../../../Components/forms/FormAdd";
import CustomformInput from "../../../../Components/Inputs/Inputs";
import "./AddClient.css";
function AddClient() {
  const [client, setClient] = useState({});
  const [showPassword, setshowPassword] = useState(false);
  const [showSlectCompany, setshowSlectCompany] = useState(false);

  const onChange = (attribute, value) => {
    let client1 = client;
    client1[attribute] = value;
    setClient(client1);
    if (attribute == "role" && (value == "admin" || value == "employee")) {
      setshowSlectCompany(true);
    }

    if (attribute == "role" && value == "super_admin") {
      setshowSlectCompany(false);
    }
  };

  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormAdd Title="Ajout d'un client" className="col-md-6">
      <div>
        <TextField
          id="firstname"
          required
          style={{ width: "100%" }}
          variant="outlined"
          label="Nom"
          value={client.firstname}
          margin="normal"
          onChange={(event) => {
            onChange("firstname", event.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          id="lastname"
          required
          style={{ width: "100%" }}
          variant="outlined"
          label="Prénom"
          value={client.lastname}
          margin="normal"
          onChange={(event) => {
            onChange("lastname", event.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          id="email"
          required
          style={{ width: "100%" }}
          variant="outlined"
          label="Email"
          type="email"
          value={client.email}
          margin="normal"
          onChange={(event) => {
            onChange("email", event.target.value);
          }}
        />
      </div>
      <div>
        <FormControl
          margin="normal"
          variant="outlined"
          style={{ width: "100%" }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Mots de passe
          </InputLabel>
          <OutlinedInput
            style={{ width: "100%" }}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={client.password}
            onChange={(event) => {
              onChange("password", event.target.value);
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
      </div>
      <div>
        <FormControl
          margin="normal"
          variant="outlined"
          style={{ width: "100%" }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Mots de passe
          </InputLabel>
          <OutlinedInput
            style={{ width: "100%" }}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={client.password}
            onChange={(event) => {
              onChange("password", event.target.value);
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
      </div>
      <div>
        <TextField
          id="birthdate"
          required
          style={{ width: "100%" }}
          variant="outlined"
          label="Date de naissance"
          type="date"
          value={client.birthdate}
          margin="normal"
          onChange={(event) => {
            onChange("birthdate", event.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          required
          id="phone"
          style={{ width: "100%" }}
          variant="outlined"
          label="Téléphone"
          value={client.phone}
          type="number"
          margin="normal"
          onChange={(event) => {
            onChange("phone", event.target.value);
          }}
        />
      </div>
      <div>
        <FormControl
          variant="outlined"
          style={{ width: "100%" }}
          margin="normal"
        >
          <InputLabel>Role</InputLabel>
          <Select
            native
            value={client.role}
            onChange={(event) => {
              onChange("role", event.target.value);
            }}
            label="role"
            inputProps={{
              name: "role",
              id: "outlined-pack-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value="super_admin">Administrateur 2i</option>
            <option value="admin">Administrateur</option>
            <option value="employee">Employé</option>
          </Select>
        </FormControl>
      </div>
      {showSlectCompany ? (
        <div>
          <FormControl
            variant="outlined"
            style={{ width: "100%" }}
            margin="normal"
          >
            <InputLabel>Societé</InputLabel>
            <Select
              native
              value={client.company}
              onChange={(event) => {
                onChange("company", event.target.value);
              }}
              label="company"
              inputProps={{
                name: "company",
                id: "outlined-company-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value="2i">2i</option>
              <option value="tresors">tresors</option>
            </Select>
          </FormControl>
        </div>
      ) : null}
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
            console.log("ajouter :", client);
          }}
        ></CustomFormButton>
      </div>
    </FormAdd>
  );
}

export default AddClient;
