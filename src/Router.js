import { BrowserRouter, Switch, Route } from "react-router-dom";
import PatientHome from "./Components/PatientHome";
import DoctorHome from "./Components/DoctorHome";
import Appointment from "./Components/Appointment";
import Signin from "./Components/Index/Signin";
import Navbar from "./Components/Navbar/Navbar";
import Layout from "./Layout";
import Signup from "./Components/Index/Signup";
import NotFound from "./Components/404";
import SignUp2 from "./Components/SignUp2";
import PrivateRoute from "./Contexts/Private__Route";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/test", "/doctor", "/patient", "/appointment"]}>
          <Layout>
            <Switch>
              <PrivateRoute path="/test" component={Navbar} />
              <PrivateRoute path="/doctor" component={DoctorHome} />
              <PrivateRoute path="/patient" component={PatientHome} />
              <PrivateRoute path="/appointment" component={Appointment} />
            </Switch>
          </Layout>
        </Route>
        <Route path={["/", "/signup", "/signup2"]}>
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signup2" component={SignUp2} />
            <Route component={NotFound} />
          </Switch>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
