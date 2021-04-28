import { combineReducers } from "redux";
import Auth from "./Auth";
import Feature from "./Feature";
import Company from "./Company";
import Product from "./Product";
import Category from "./Category";
import Tags from "./Tags";
import Customer from "./Customer.js";
import PictureWordPress from "./PictureWordPress.js";

export default combineReducers({
  Auth,
  Feature,
  Company,
  Product,
  Category,
  Tags,
  Customer,
  PictureWordPress,
});
