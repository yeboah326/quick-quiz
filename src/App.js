import "./App.css";
import { LoginChoice, StudentLogin, TutorLogin } from "./components/login/";
import { SignUpChoice, StudentSignUp, TutorSignUp } from "./components/signup/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" exact component={LoginChoice} />
          <Route path="/login/tutor" exact component={TutorLogin} />
          <Route path="/login/student" exact component={StudentLogin} />
          <Route path="/signup" exact component={SignUpChoice} />
          <Route path="/signup/tutor" exact component={TutorSignUp} />
          <Route path="/signup/student" exact component={StudentSignUp} />
          <Route path="/dashboard" exact component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
