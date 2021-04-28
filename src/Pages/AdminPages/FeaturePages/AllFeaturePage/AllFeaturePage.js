import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { GetAllFeatures } from "../../../../Actions/Feature";
import { CustomFormButton } from "../../../../Components/Buttons/CustomButton";
import FormAdd from "../../../../Components/forms/FormAdd";
import EnhancedTable from "../../../../Components/Tables/CustomTable";
import AddFeaturePage from "../AddFeaturePage/AddFeaturePage";

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Nom",
  },
  {
    id: "groupName",
    numeric: false,
    disablePadding: true,
    label: "Nom du groupe",
  },
  {
    id: "description",
    numeric: false,
    disablePadding: true,
    label: "Description",
  },
  { id: "price", numeric: true, disablePadding: true, label: "Prix" },
];

function AllFeaturePage(props) {
  const { features, token } = props;

  const [showAdd, setshowAdd] = useState(false);

  useEffect(() => {
    console.log("in use effect");
    props.GetAllFeatures(token);
  }, []);

  return (
    <div className="col-md-12">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
        className="col-md-12"
      >
        <CustomFormButton
          value="Ajouter"
          width="20%"
          onClick={() => {
            setshowAdd(!showAdd);
          }}
        ></CustomFormButton>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
        className="col-md-12"
      >
        {showAdd ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
            className="col-md-12"
          >
            <FormAdd Title="Fonctionnalités" className="col-md-8">
              <EnhancedTable
                rows={features}
                headCells={headCells}
                title=""
                alignRow="center"
                alignhead="center"
              ></EnhancedTable>
            </FormAdd>
            <div className="col-md-4">
              <AddFeaturePage></AddFeaturePage>
            </div>
          </div>
        ) : (
          <FormAdd Title="Fonctionnalités" className="col-md-12">
            <EnhancedTable
              rows={features}
              headCells={headCells}
              title=""
              alignRow="center"
              alignhead="center"
            ></EnhancedTable>
          </FormAdd>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    features: state.Feature.features,
    token: state.Auth.Authorization,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    GetAllFeatures: (token) => {
      dispatch(GetAllFeatures(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchProps)(AllFeaturePage);
