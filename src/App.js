import "./App.css";
import { LoginChoice, StudentLogin, TutorLogin } from "./components/login/";
import { SignUpChoice } from "./components/signup/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" exact component={LoginChoice}/>
          <Route path="/login/tutor" exact component={TutorLogin} />
          <Route path="/login/student" exact component={StudentLogin} />
          <Route path="/signup" component={SignUpChoice}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
