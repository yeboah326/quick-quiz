import "./App.css";
import Login from "./components/login/Login";
import { StudentLogin, TutorLogin } from "./components/login/index";
import Signup from "./components/signup/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login/tutor" component={TutorLogin} />
          <Route path="/login/student" component={StudentLogin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
