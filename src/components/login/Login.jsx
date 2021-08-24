import "../../styles/login/login.css";
import { MontserratLightText, BreeText, Input, Button } from "../generic";
import { IconmonstrAngelLeftCircleThin } from "../icons";

function Login({user_type}) {
  return (
    <div className="container">
      <div className="carousel">
        <div className="carousel-nav">
          <IconmonstrAngelLeftCircleThin
            className="desktop-chevron"
          />
        </div>
        <div className="carousel-images"></div>
      </div>
      <div className="form-section">
        <div className="navigation">
          <IconmonstrAngelLeftCircleThin
            className="mobile-chevron"
          />
        </div>
        <div className="title">
          <BreeText Text={(user_type==="student") ? "Student" : "Tutor"} fontSize={1} />
          <BreeText Text={"Login"} fontSize={3} marginTop={-15}/>
        </div>
        <div className="form-fields">
          <div style={{marginBottom: "1.5rem"}}>
            <Input className="form-input" type={"text"} Text={"Username"}/>
          </div>
          <div style={{marginBottom: "1.5rem"}}>
            <Input className="form-input" type={"password"} Text={"Password"}/>
          </div>
          <div style={{textAlign: "right"}}>
            <MontserratLightText Text={"Forgot password?"} fontSize={1} />
          </div>
          <div>
            <Button Text={"Login"}/>
          </div>
        </div>
        <div className="extra">
          <MontserratLightText Text={"Don't have an account?"}/>
        </div>
      </div>
    </div>
  );
}

export default Login;
