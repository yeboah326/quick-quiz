import { useState } from "react";
import "../../styles/signup/signup.css";
import { IconmonstrAngelLeftCircleThin } from "../icons";
import { BreeText, MontserratLightText, Input, Button } from "../generic";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup({ user_type }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Axios Setup
  const instance = axios.create({
    baseURL: "http://127.0.0.1:5000/",
  });

  // TODO: Add logic to check passwords in password field and confirm password field
  // TODO: Add span to reveal message when input is invalid
  // TODO: Add a message when signup is successful
  const onSubmitClick = (event) => {
    event.preventDefault();
    let credentials = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    console.log(credentials);
    instance ({
      method: "post",
      url: "auth/signup",
      data: {
        ...formData,
        ...(user_type === "student" && { user_type: "student" }),
        ...(user_type === "tutor" && { user_type: "tutor" }),
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .then(function (error) {
        console.log(error);
      });
  };

  const handleNameChange = (event) =>
    setFormData({ ...formData, name: event.target.value });
  const handleEmailChange = (event) =>
    setFormData({ ...formData, email: event.target.value });
  const handlePasswordChange = (event) =>
    setFormData({ ...formData, password: event.target.value });
  const handleConfirmPasswordChange = (event) =>
    setFormData({ ...formData, confirmPassword: event.target.value });

  return (
    <div className="signup-container">
      <div className="signup-carousel">
        <div className="signup-carousel-nav">
          <Link to="/signup">
            <IconmonstrAngelLeftCircleThin className="signup-desktop-chevron" />
          </Link>
        </div>
        <div className="signup-carousel-images"></div>
      </div>
      <div className="signup-form-section">
        <div className="signup-navigation">
          <Link to="/signup">
            <IconmonstrAngelLeftCircleThin className="signup-mobile-chevron" />
          </Link>
        </div>
        <div className="signup-title">
          <BreeText
            Text={user_type === "student" ? "Student" : "Tutor"}
            fontSize={1}
          />
          <BreeText Text={"Sign Up"} fontSize={3} marginTop={-15} />
        </div>
        <form action="" method="post">
          <div className="signup-form-fields">
            <Input
              className="signup-form-input"
              type={"text"}
              Text={"Full Name"}
              onChange={handleNameChange}
            />
            <Input
              className="signup-form-input"
              type={"text"}
              Text={"Email"}
              onChange={handleEmailChange}
            />
            <Input
              className="signup-form-input"
              type={"password"}
              Text={"Password"}
              onChange={handlePasswordChange}
            />
            <Input
              className="signup-form-input"
              type={"password"}
              Text={"Confirm Password"}
              onChange={handleConfirmPasswordChange}
            />
            <div style={{ textAlign: "right" }}>
              <MontserratLightText Text={"Forgot password?"} fontSize={1} />
            </div>
            <div>
              <Button Text={"Sign Up"} onClick={onSubmitClick} />
            </div>
          </div>
        </form>
        <div className="signup-extra">
          <MontserratLightText Text={"Already have an account?"} />
        </div>
      </div>
    </div>
  );
}

export default Signup;
