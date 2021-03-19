import "./App.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/AdminPages/Home/Home";
import AddClient from "./Pages/AdminPages/CLientsManagment/AddClient/AddClient";
import {Provider} from "react-redux";
import {store,persistor} from "./Store/ConfigureStore"
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
  <Provider store={store} >
       <PersistGate loading={null} persistor={persistor}>
      <div className="App">
      <Router>
        <Switch>
          <Route path="/home"  component={Home}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
        </Switch>
      </Router>
    </div>
    </PersistGate>
  </Provider>
  );
}

export default App;
