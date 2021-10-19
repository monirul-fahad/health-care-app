import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar/Navbar";

import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login/Login";
import DoctorDetails from "./components/DoctorDetails/DoctorDetails";
import AuthProvider from "./context/AuthProvider";

import Footer from "./components/Shared/Footer/Footer";
import PrivatteRoute from "./components/Login/PrivateRoute/PrivatteRoute";

import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <PrivatteRoute path="/doctorDetails/:id">
              <DoctorDetails></DoctorDetails>
            </PrivatteRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
