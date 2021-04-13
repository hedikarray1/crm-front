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
import {
  ClientGetAllProducts,
  ClientGetDetailProduct,
} from "../../../../Actions/Product";
import Product from "../../../../Reducers/Product";

function AllProductsPage(props) {
  const { allProducts, token } = props;
  const history = useHistory();
  const [lastChecked, setlastChecked] = useState(null);
  const [selectedItems, setselectedItems] = useState([]);

  const [displayMode, setdisplayMode] = useState("thumblist");
  const [pageSizes, setpageSizes] = useState([10, 20, 30, 50, 100]);
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
  const [totalItemCount, settotalItemCount] = useState(0);
  const [search, setsearch] = useState("");

  useEffect(() => {
    console.log("in use effect");
    props.GetAllProducts(token);
  }, []);

  const getIndex = (value, arr, prop) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
    return -1;
  };

  const handleClick = (event, product) => {
    onCheckItem(event, product.id);
    console.log("click go to detail prooduct :", product);
    props.GetDetailProduct(token, product.id);
    history.push({
      pathname: "/home/DetailProductPage",
    });
  };

  const onCheckItem = (event, id) => {
    if (
      event.target.tagName === "A" ||
      (event.target.parentElement && event.target.parentElement.tagName === "A")
    ) {
      return true;
    }
    if (lastChecked === null) {
      setlastChecked(id);
    }

    let selectedItems1 = selectedItems;
    if (selectedItems1.includes(id)) {
      selectedItems1 = selectedItems1.filter((x) => x !== id);
    } else {
      selectedItems1.push(id);
    }
    setselectedItems(selectedItems1);

    if (event.shiftKey) {
      var items = allProducts;
      var start = getIndex(id, items, "id");
      var end = getIndex(lastChecked, items, "id");
      items = items.slice(Math.min(start, end), Math.max(start, end) + 1);
      selectedItems1.push(
        ...items.map((item) => {
          return item.id;
        })
      );
      selectedItems1 = Array.from(new Set(selectedItems1));
      setselectedItems(selectedItems1);
    }
    document.activeElement.blur();
  };

  const changeDisplayMode = (mode) => {
    setdisplayMode(mode);
    return false;
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

  const dataListRender = () => {};

  const startIndex = (currentPage - 1) * selectedPageSize;
  const endIndex = currentPage * selectedPageSize;
  return (
    <div className="col-md-12">
      <ListPageHeading
        heading="Tous les produits"
        displayMode={displayMode}
        changeDisplayMode={changeDisplayMode}
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
          if (displayMode === "imagelist") {
            return (
              <ImageListView
                key={product.id}
                product={product}
                isSelect={selectedItems.includes(product.id)}
                collect={collect}
                onCheckItem={handleClick}
              />
            );
          } else if (displayMode === "thumblist") {
            return (
              <ThumbListView
                key={product.id}
                product={product}
                isSelect={selectedItems.includes(product.id)}
                collect={collect}
                onCheckItem={handleClick}
              />
            );
          }
        })}
      </Row>
    </div>
  );
}

function collect(props) {
  return { data: props.data };
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.Product.allProducts,
    token: state.Auth.Authorization,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    GetAllProducts: (token) => {
      dispatch(ClientGetAllProducts(token));
    },
    GetDetailProduct: (token, id) => {
      dispatch(ClientGetDetailProduct(token, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchProps)(AllProductsPage);
