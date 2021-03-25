import React, { useState } from "react";
import "./Login.css";
import Logo from "../assets/pictures/logo-ilis.svg";
import { connect } from "react-redux";
import { LoginAuthAction } from "../Actions/Auth";
function Login(props) {
  const { user, login } = props;
  const [userState, setUserState] = useState({});

  const login1 = () => {
    login(userState);
  };
  const onChange = (attribute, value) => {
    let user1 = userState;
    user1[attribute] = value;

    setUserState(user1);
  };
  return (
    <div className="login">
      <div className="login_container">
        <div className="login_side">
          <div className="login_side_data">
            <img className="login_side_data_picture" src={Logo} />
            <p className="login_side_slogan">
              salut sqfq sqfsqf qs dsqsq qsdfsqf qssq f salut sqfq sqfsqf qs
              dsqsq qsdfsqf qssq f salut sqfq sqfsqf qs dsqsq qsdfsqf qssq f{" "}
            </p>
          </div>
        </div>
        <div className="login_form">
          <label className="label_form_title">Se connecter</label>
          <label className="label_field_indicator">Adresse électronique:</label>
          <input
            type="email"
            className="form-control"
            value={userState.email}
            placeholder="Adresse électronique"
            onChange={(e) => {
              onChange("email", e.target.value);
            }}
          ></input>
          <label className="label_field_indicator">Mot de passe:</label>
          <input
            type="password"
            className="form-control"
            value={userState.password}
            placeholder="Mot de passe"
            onChange={(e) => {
              onChange("password", e.target.value);
            }}
          ></input>
          <button
            type="submit"
            className="login_button"
            onClick={() => {
              login1();
            }}
          >
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("in state", state);
  return { user: state };
};

const mapDispatchProps = (dispatch) => {
  return {
    login: (userState) => {
      //console.log("userstate",userState);
      dispatch(LoginAuthAction(userState));
    },
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Login);
