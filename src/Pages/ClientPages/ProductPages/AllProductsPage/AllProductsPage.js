import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Row } from "reactstrap";
import { Tab, Tabs, Typography } from "@material-ui/core";
import ImageListView from "../../../../Components/List/ImageListView/ImageListView";
import ThumbListView from "../../../../Components/List/ThumbListView/ThumbListView";
import * as BsIcons from "react-icons/bs";
import "./AllProductsPage.css";
import ListPageHeading from "../../../../Components/List/ListPageHeading/ListPageHeading";
import { Separator } from "../../../../Components/CustomBootstrap/CustomBootstrap";
import { productData } from "../../../../Data/ProductData";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import {
  ClientGetAllProducts,
  ClientGetDetailProduct,
  ClientGetProductsPerPage,
} from "../../../../Actions/Product";
import Product from "../../../../Reducers/Product";

function AllProductsPage(props) {
  const { allProducts, token, totalProducts, totalPages } = props;
  const history = useHistory();

  const [pageSizes, setpageSizes] = useState([10, 20, 30, 50]);
  const [selectedOrderOption, setselectedOrderOption] = useState({
    column: "name",
    label: "Nom du produit",
  });

  const [orderOptions, setorderOptions] = useState([
    { column: "name", label: "Nom du produit" },
    { column: "price", label: "Prix" },
  ]);

  const [selectedPageSize, setselectedPageSize] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);
  const [totalItemCount, settotalItemCount] = useState(totalProducts);
  const [search, setsearch] = useState("");

  useEffect(() => {
    console.log("in use effect");
    props.GetAllProducts(token, 1, selectedPageSize);
    settotalItemCount(totalProducts);
    console.log("totalProducts", totalProducts);
  }, []);

  const handleClick = (event, product) => {
    console.log("click go to detail prooduct :", product);
    props.GetDetailProduct(token, product.id);
    history.push({
      pathname: "/home/DetailProductPage",
    });
  };

  const changeOrderBy = (column) => {
    setselectedOrderOption(orderOptions.find((x) => x.column === column));
    dataListRender();
  };

  const changePageSize = (size) => {
    setselectedPageSize(size);
    setcurrentPage(1);
    dataListRender();
  };

  const onSearchKey = (e) => {
    setsearch(e.target.value.toLowerCase());
    dataListRender();
  };

  const dataListRender = async () => {
    await props.GetAllProducts(token, currentPage, selectedPageSize);

    window.scrollTo(0, 0);
  };

  const onChangePage = (event, value) => {
    setcurrentPage(value);
    dataListRender();
  };

  const startIndex = (currentPage - 1) * selectedPageSize;
  const endIndex = currentPage * selectedPageSize;
  return (
    <div className="col-md-12">
      <ListPageHeading
        heading="Tous les produits"
        changeOrderBy={changeOrderBy}
        changePageSize={changePageSize}
        selectedPageSize={selectedPageSize}
        totalItemCount={totalItemCount}
        selectedOrderOption={selectedOrderOption}
        startIndex={startIndex}
        endIndex={endIndex}
        onSearchKey={onSearchKey}
        orderOptions={orderOptions}
        pageSizes={pageSizes}
      />
      <Separator className="mb-5" />
      <Row>
        {allProducts.map((product) => {
          return (
            <ThumbListView
              key={product.id}
              product={product}
              collect={collect}
              onCheckItem={handleClick}
            />
          );
        })}
      </Row>
      <div className="mb-5" />
      <div className="col-12 display_center">
        <Pagination
          count={totalPages}
          variant="outlined"
          page={currentPage}
          shape="rounded"
          color="primary"
          onChange={onChangePage}
        />
      </div>
      <div className="mb-5" />
    </div>
  );
}

function collect(props) {
  return { data: props.data };
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.Product.allProducts,
    totalProducts: state.Product.totalProducts,
    totalPages: state.Product.totalPages,
    token: state.Auth.Authorization,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    GetAllProducts: (token, page, per_page) => {
      dispatch(ClientGetProductsPerPage(token, page, per_page));
    },
    GetDetailProduct: (token, id) => {
      dispatch(ClientGetDetailProduct(token, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchProps)(AllProductsPage);
