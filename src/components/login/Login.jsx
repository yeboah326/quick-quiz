import { useState } from "react";
import "../../styles/login/login.css";
import { MontserratLightText, BreeText, Input, Button } from "../generic";
import { IconmonstrAngelLeftCircleThin } from "../icons";
import { Link } from "react-router-dom";
import axios from "axios";

// TODO: Add stock images to student and tutor login page

function Login({ user_type }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Axios Setup
  const instance = axios.create({
    baseURL: "http://127.0.0.1:5000/",
  });

  const onSubmitClick = (event) => {
    event.preventDefault();
    instance({
      method: "post",
      url: "auth/login",
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

  const handlePasswordChange = (event) =>
    setFormData({ ...formData, password: event.target.value });
  const handleEmailChange = (event) =>
    setFormData({ ...formData, email: event.target.value });

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
              <Input
                className="form-input"
                type={"text"}
                Text={"Email"}
                onChange={handleEmailChange}
              />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <Input
                className="form-input"
                type={"password"}
                Text={"Password"}
                onChange={handlePasswordChange}
              />
            </div>
            <div style={{ textAlign: "right" }}>
              <MontserratLightText Text={"Forgot password?"} fontSize={1} />
            </div>
            <div>
              <Button Text={"Login"} onClick={onSubmitClick} />
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
