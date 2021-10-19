import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar/Navbar";

import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import DoctorDetails from "./components/DoctorDetails/DoctorDetails";
import AuthProvider from "./context/AuthProvider";
import Header from "./components/Navbar2";
import Footer from "./components/Shared/Footer/Footer";
import PrivatteRoute from "./components/Login/PrivateRoute/PrivatteRoute";
// import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* <Navbar></Navbar> */}
          <Header></Header>
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
