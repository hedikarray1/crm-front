import { combineReducers } from "redux";
import Auth from "./Auth";
import Feature from "./Feature";
import Company from "./Company";
import Product from "./Product";
import Category from "./Category";
import Tags from "./Tags";

export default combineReducers({
  Auth,
  Feature,
  Company,
  Product,
  Category,
  Tags,
});
