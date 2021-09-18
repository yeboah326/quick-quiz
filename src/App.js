import "./App.css";
import { LoginChoice, StudentLogin, TutorLogin } from "./components/login/";
import { SignUpChoice, StudentSignUp, TutorSignUp } from "./components/signup/";
import { PageNotFound } from "./components/generic";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Switch>
          <Route path="/login" exact component={LoginChoice} />
          <Route path="/login/tutor" exact component={TutorLogin} />
          <Route path="/login/student" exact component={StudentLogin} />
          <Route path="/signup" exact component={SignUpChoice} />
          <Route path="/signup/tutor" exact component={TutorSignUp} />
          <Route path="/signup/student" exact component={StudentSignUp} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="*" exact component={PageNotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
