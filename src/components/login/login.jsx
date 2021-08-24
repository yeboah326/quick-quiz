import "../../styles/login/login.css";
import { MontserratLightText, BreeText, Input, Button } from "../generic";
import { IconmonstrAngelLeftCircleThin } from "../icons";

function Login() {
  return (
    <div className="container">
      <div className="carousel">
        <div className="carousel-nav">
          <IconmonstrAngelLeftCircleThin
            className="desktop-chevron"
            color={"#4B3EFF"}
          />
        </div>
        <div className="carousel-images"></div>
      </div>
      <div className="form-section">
        <div className="navigation">
          <IconmonstrAngelLeftCircleThin
            className="mobile-chevron"
            style={{color:"#4B3EFF"}}
          />
        </div>
        <div className="title">
          <BreeText Text={"Student"} fontSize={1} />
          <BreeText Text={"Login"} fontSize={3} marginTop={-15}/>
        </div>
        <div className="form-fields">
          <div style={{marginBottom: "1.5rem"}}>
            <MontserratLightText Text={"Username"} fontSize={1.3} />
            <Input className="form-input" type={"text"}/>
          </div>
          <div style={{marginBottom: "1.5rem"}}>
            <MontserratLightText Text={"Password"} fontSize={1.3} />
            <Input className="form-input" type={"password"}/>
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
