import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar/Navbar";

import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import DoctorDetails from "./components/DoctorDetails/DoctorDetails";
// import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Register></Register>
          </Route>
          <Route path="/doctorDetails/:id">
            <DoctorDetails></DoctorDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
