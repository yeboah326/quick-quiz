import "../../styles/signup/signup.css";
import { IconmonstrAngelLeftCircleThin } from "../icons";
import { BreeText, MontserratLightText, Input, Button } from "../generic";

function Signup({ user_type }) {
  return (
    <div className="signup-container">
      <div className="signup-carousel">
        <div className="signup-carousel-nav">
          <IconmonstrAngelLeftCircleThin className="signup-desktop-chevron" />
        </div>
        <div className="signup-carousel-images"></div>
      </div>
      <div className="signup-form-section">
        <div className="signup-navigation">
          <IconmonstrAngelLeftCircleThin className="signup-mobile-chevron" />
        </div>
        <div className="signup-title">
          <BreeText
            Text={user_type === "student" ? "Student" : "Tutor"}
            fontSize={1}
          />
          <BreeText Text={"Sign Up"} fontSize={3} marginTop={-15} />
        </div>
        <div className="signup-form-fields">
            <Input className="signup-form-input" type={"text"} Text={"Full Name"} />
            <Input className="signup-form-input" type={"text"} Text={"Email"} />
            <Input className="signup-form-input" type={"password"} Text={"Password"} />
            <Input className="signup-form-input" type={"password"} Text={"Confirm Password"} />
          <div style={{ textAlign: "right" }}>
            <MontserratLightText Text={"Forgot password?"} fontSize={1} />
          </div>
          <div>
            <Button Text={"Login"} />
          </div>
        </div>
        <div className="signup-extra">
          <MontserratLightText Text={"Already have an account?"} />
        </div>
      </div>
    </div>
  );
}

export default Signup;
