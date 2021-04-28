import "./App.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./Store/ConfigureStore";
import { PersistGate } from "redux-persist/integration/react";
<<<<<<< HEAD
import Profile from "./Pages/ProfilePage/Profile";
import CaissePage from "./Pages/CaissePage/CaissePage";
=======
import Home from "./Pages/AdminPages/Home/Home";
import Login from "./Pages/PublicPages/LoginPage/Login";
>>>>>>> a940c421054b5b4c71c5fe33f46dcac27b1c1f8e
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
<<<<<<< HEAD
              <Route path="/caisse" exact component={CaissePage}></Route>
           
=======
>>>>>>> a940c421054b5b4c71c5fe33f46dcac27b1c1f8e
            </Switch>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
