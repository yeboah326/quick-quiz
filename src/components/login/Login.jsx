import "../../styles/login/login.css";
import { MontserratLightText, BreeText, Input, Button } from "../generic";
import { IconmonstrAngelLeftCircleThin } from "../icons";
import { Link } from "react-router-dom";

function Login({ user_type }) {
  return (
    <div className="container">
      <div className="carousel">
        <div className="carousel-nav">
          <Link to="/login">
            <IconmonstrAngelLeftCircleThin className="desktop-chevron" />
          </Link>
        </div>
        <div className="carousel-images"></div>
      </div>
      <div className="form-section">
        <div className="navigation">
          <Link to="/login">
            <IconmonstrAngelLeftCircleThin className="mobile-chevron" />
          </Link>
        </div>
        <form action="" method="post">
          <div className="title">
            <BreeText
              Text={user_type === "student" ? "Student" : "Tutor"}
              fontSize={1}
            />
            <BreeText Text={"Login"} fontSize={3} marginTop={-15} />
          </div>
          <div className="form-fields">
            <div style={{ marginBottom: "1.5rem" }}>
              <Input className="form-input" type={"text"} Text={"Email"} />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <Input
                className="form-input"
                type={"password"}
                Text={"Password"}
              />
            </div>
            <div style={{ textAlign: "right" }}>
              <MontserratLightText Text={"Forgot password?"} fontSize={1} />
            </div>
            <div>
              <Button Text={"Login"} />
            </div>
          </div>
        </form>
        <div className="extra">
          <MontserratLightText Text={"Don't have an account?"} />
        </div>
      </div>
    </div>
  );
}

export default Login;
