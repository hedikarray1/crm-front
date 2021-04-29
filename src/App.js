import "./App.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./Store/ConfigureStore";
import { PersistGate } from "redux-persist/integration/react";

import Home from "./Pages/AdminPages/Home/Home";
import Login from "./Pages/PublicPages/LoginPage/Login";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router>
            <Switch>
              <Route path="/home" component={Home}></Route>
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
