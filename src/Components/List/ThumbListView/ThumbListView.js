import React from "react";
import { Card, CustomInput, Badge, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { ContextMenuTrigger } from "react-contextmenu";
import "./ThumbListView.css";
import { Colxx, Separator } from "../../CustomBootstrap/CustomBootstrap";

export default function ThumbListView(props) {
  const { product, isSelect, collect, onCheckItem } = props;
  return (
    <Colxx
      xxs="12"
      key={product.id}
      className="mb-3 col_min_width rounded_card"
    >
      <Card
        className={classnames("d-flex flex-row rounded_card", {
          active: isSelect,
        })}
      >
        <NavLink
          to={`?p=${product.id}`}
          className="d-flex img_border"
          onClick={(event) => onCheckItem(event, product)}
        >
          <img
            onClick={(event) => onCheckItem(event, product)}
            alt={product.name}
            src={product.images[0].src}
            className="list-thumbnail responsive border-0 card-img-left img_round"
          />
        </NavLink>
        <div className="pl-2 d-flex flex-grow-1 min-width-zero">
          <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center card_body_padding">
            <NavLink
              to={`?p=${product.id}`}
              className="w-30 w-sm-100"
              onClick={(event) => onCheckItem(event, product)}
            >
              <p className="list-item-heading mb-1 truncate">{product.name}</p>
            </NavLink>
            <p
              className="mb-1 text-muted text-small w-15 w-sm-100"
              onClick={(event) => onCheckItem(event, product)}
            >
              {product.categories.map((cat) => {
                return (
                  <Badge color="outline-secondary mb-1 mr-1" pill>
                    {cat.name.replace("&amp;", "&")}
                  </Badge>
                );
              })}
            </p>
            <p
              className="mb-1 text-muted text-small w-15 w-sm-100"
              onClick={(event) => onCheckItem(event, product)}
            >
              {product.price}
              {" DT"}
            </p>
            <div
              className="w-15 w-sm-100"
              onClick={(event) => onCheckItem(event, product)}
            >
              <Badge
                color={product.stock_status == "instock" ? "success" : "danger"}
                pill
              >
                {product.stock_status == "instock"
                  ? "En stock"
                  : "Rupture de stock"}
              </Badge>
            </div>
            <div className="w-14 w-sm-100 container_btn">
              <Button
                outline
                color="warning"
                className="mb-2 btn_product"
                onClick={() => {
                  console.log("btn modifier clicked");
                }}
              >
                Modifier
              </Button>
              <Button
                outline
                color="danger"
                className="mb-2 btn_product"
                onClick={() => {
                  console.log("btn supprimer clicked");
                }}
              >
                Supprimer
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Colxx>
  );
}
