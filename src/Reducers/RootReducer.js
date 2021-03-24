import { combineReducers } from "redux";
import Auth from "./Auth";
import Feature from "./Feature";
import Company from "./Company";

export default combineReducers({
  Auth,
  Feature,
  Company
});
