import './App.css';
import {Route,Link,BrowserRouter as Router,Switch} from "react-router-dom";
import Login from './Pages/Login';
import Home from './Pages/AdminPages/Home/Home';
import AddClient from './Pages/AdminPages/CLientsManagment/AddClient/AddClient';

function App() {




  return (
    <div className="App">
     <Router>
   
      <Switch>
        <Route path="/home" component={Home}></Route>
     
      </Switch>
    </Router>
    </div>
  );
}

export default App;

