import React, { useState } from "react";
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

export default function AllProductsPage() {
  const [lastChecked, setlastChecked] = useState(null);
  const [selectedItems, setselectedItems] = useState([]);
  const [products, setproducts] = useState(productData);
  const [displayMode, setdisplayMode] = useState("thumblist");
  const [pageSizes, setpageSizes] = useState([10, 20, 30, 50, 100]);

  const getIndex = (value, arr, prop) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
    return -1;
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
      var items = products;
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

  return (
    <div className="col-md-12">
      <ListPageHeading
        heading="Tous les produits"
        displayMode={displayMode}
        changeDisplayMode={changeDisplayMode}
      />
      <Separator className="mb-5" />
      <Row>
        {products.map((product) => {
          if (displayMode === "imagelist") {
            return (
              <ImageListView
                key={product.id}
                product={product}
                isSelect={selectedItems.includes(product.id)}
                collect={collect}
                onCheckItem={onCheckItem}
              />
            );
          } else if (displayMode === "thumblist") {
            return (
              <ThumbListView
                key={product.id}
                product={product}
                isSelect={selectedItems.includes(product.id)}
                collect={collect}
                onCheckItem={onCheckItem}
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
