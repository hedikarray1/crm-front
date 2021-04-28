import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { connect } from "react-redux";
import { AddFeature, GetAllGroupeName } from "../../../../Actions/Feature";
import FormAdd from "../../../../Components/forms/FormAdd";
import { CustomFormButton } from "../../../../Components/Buttons/CustomButton";
const gg = [];

function AddFeaturePage(props) {
  const { token, groupNames } = props;
  const [feature, setFeature] = useState({});

  const onChange = (attribute, value) => {
    let feature1 = feature;
    feature1[attribute] = value;
    setFeature(feature1);
  };

  useEffect(() => {
    props.GetGroupName(token);
  }, []);

  const add = () => {
    props.AddFeature(token, feature);
  };

  return (
    <FormAdd Title="Ajout d'une fonctionnalité" className="col-md-12">
      <div>
        <TextField
          id="name"
          required
          style={{ width: "100%" }}
          variant="outlined"
          label="Nom"
          value={feature.name}
          margin="normal"
          onChange={(event) => {
            onChange("name", event.target.value);
          }}
        />
      </div>

      <div>
        <Autocomplete
          id="groupName"
          style={{ width: "100%" }}
          freeSolo
          value={feature.groupName}
          onChange={(event, value) => {
            onChange("groupName", value);
          }}
          options={groupNames.map((option) => option.group_name)}
          renderInput={(params) => (
            <TextField
              {...params}
              required
              value={feature.groupName}
              onChange={(event) => {
                onChange("groupName", event.target.value);
              }}
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
          id="prix"
          style={{ width: "100%" }}
          variant="outlined"
          label="Prix"
          value={feature.price}
          type="number"
          margin="normal"
          onChange={(event) => {
            onChange("price", event.target.value);
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
            onChange("description", event.target.value);
          }}
        />
      </div>
      <div>
        <CustomFormButton
          value="Ajouter"
          width="50%"
          onClick={() => {
            console.log("feature jouter :", feature);
            add();
          }}
        ></CustomFormButton>
      </div>
    </FormAdd>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.Auth.Authorization,
    groupNames: state.Feature.groupNames,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    AddFeature: (token, data) => {
      dispatch(AddFeature(token, data));
    },
    GetGroupName: (token) => {
      dispatch(GetAllGroupeName(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchProps)(AddFeaturePage);
