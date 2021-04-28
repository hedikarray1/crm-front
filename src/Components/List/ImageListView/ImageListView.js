import React from "react";
import {
  Row,
  Card,
  CardBody,
  CardSubtitle,
  CardImg,
  CardText,
  CustomInput,
  Badge,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { ContextMenuTrigger } from "react-contextmenu";
import "./ImageListView.css";
import { Colxx, Separator } from "../../CustomBootstrap/CustomBootstrap";

export default function ImageListView(props) {
  const { product, isSelect, collect, onCheckItem } = props;
  return (
    <Colxx sm="6" lg="4" xl="3" className="mb-3" key={product.id}>
      <ContextMenuTrigger id="menu_id" data={product.id} collect={collect}>
        <Card
          onClick={(event) => onCheckItem(event, product)}
          className={classnames("rounded_card card_size", {
            active: isSelect,
          })}
        >
          <div className="position-relative">
            <NavLink to={`?p=${product.id}`} className="w-40 w-sm-100 ">
              <CardImg
                className="img_round_card img_border2"
                top
                alt={product.name}
                src={product.images.length > 0 ? product.images[0].src : ""}
              
              />
            </NavLink>
            <Badge
              color={product.stock_status == "instock" ? "success" : "danger"}
              pill
              className="position-absolute badge-top-left"
            >
              {product.stock_status == "instock"
                ? "En stock"
                : "Rupture de stock"}
            </Badge>
          </div>
          <CardBody>
            <Row>
              <Colxx xxs="12">
                <CardSubtitle>{product.name}</CardSubtitle>
                <CardText className="text-muted text-small mb-0 font-weight-light">
                  {product.categories.map((cat) => {
                    return (
                      <Badge color="outline-secondary mb-1 mr-1" pill>
                        {cat.name.replace("&amp;", "&")}
                      </Badge>
                    );
                  })}
                </CardText>
                <CardText></CardText>
                <p className="txt_price color-theme-2">
                  {product.price}
                  {" DT"}
                </p>
              </Colxx>
            </Row>
          </CardBody>
        </Card>
      </ContextMenuTrigger>
    </Colxx>
  );
}
