import { combineReducers } from "redux";
import Auth from "./Auth";
import Feature from "./Feature";
import Company from "./Company";
import Customer from "./Customer.js"
import Category from "./Category.js"
import PictureWordPress from "./PictureWordPress.js"

export default combineReducers({
  Auth,
  Feature,
  Company,
  Customer,
  Category,
  PictureWordPress
});
