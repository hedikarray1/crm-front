import React from "react";
import { Card, CustomInput, Badge } from "reactstrap";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { ContextMenuTrigger } from "react-contextmenu";
import "./ThumbListView.css";
import { Colxx, Separator } from "../../CustomBootstrap/CustomBootstrap";

export default function ThumbListView(props) {
  const { product, isSelect, collect, onCheckItem } = props;
  return (
    <Colxx xxs="12" key={product.id} className="mb-3">
      <ContextMenuTrigger id="menu_id" data={product.id} collect={collect}>
        <Card
          onClick={(event) => onCheckItem(event, product.id)}
          className={classnames("d-flex flex-row rounded_card", {
            active: isSelect,
          })}
        >
          <NavLink to={`?p=${product.id}`} className="d-flex">
            <img
              alt={product.name}
              src={product.images[0].src}
              className="list-thumbnail responsive border-0 card-img-left img_round"
            />
          </NavLink>
          <div className="pl-2 d-flex flex-grow-1 min-width-zero">
            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
              <NavLink to={`?p=${product.id}`} className="w-40 w-sm-100">
                <p className="list-item-heading mb-1 truncate">
                  {product.name}
                </p>
              </NavLink>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {product.categories.map((cat) => {
                  return cat.name + ", ";
                })}
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {product.price}DT
              </p>
              <div className="w-15 w-sm-100">
                <Badge color="green" pill>
                  {product.stock_status}
                </Badge>
              </div>
            </div>
            <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
              <CustomInput
                className="item-check mb-0"
                type="checkbox"
                id={`check_${product.id}`}
                checked={isSelect}
                onChange={() => {}}
                label=""
              />
            </div>
          </div>
        </Card>
      </ContextMenuTrigger>
    </Colxx>
  );
}
