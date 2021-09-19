import { useState } from "react";
import "../../styles/login/login.css";
import { MontserratLightText, BreeText, Input, Button } from "../generic";
import { IconmonstrAngelLeftCircleThin } from "../icons";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { login, useAuth } from "../../auth";

// TODO: Add stock images to student and tutor login page

function Login({ user_type }) {
  // Form Data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //  Form Errors
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const validateEmail = (email) => {
    !email ? setEmailErr("Email field cannot be empty") : setEmailErr("");
  };

  const validatePassword = (password) => {
    !password
      ? setPasswordErr("Password field cannot be empty")
      : setEmailErr("");
  };

  // Axios Setup
  const instance = axios.create({
    baseURL: "http://127.0.0.1:5000/",
  });

  const onSubmitClick = (event) => {
    event.preventDefault();

    // Run the checks
    validateEmail(email);
    validatePassword(password);
    console.log(`Email error: ${emailErr}`);
    // console.log(`Password Error: ${passwordErr}`);
    if (!emailErr) {
      console.log("didn't run");
      instance({
        method: "post",
        url: "auth/login",
        data: {
          email: email,
          password: password,
          ...(user_type === "student" && { user_type: "student" }),
          ...(user_type === "tutor" && { user_type: "tutor" }),
        },
      })
        .then(function (response) {
          if (response.status === 200) {
            toast.success("Login successful", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }

          if (response.data["token"]) {
            login(response.data["token"]);
            console.log(response.data["token"]);
          }

          if (logged) {
          }

          redirectToDashboard();
          console.log(response);
        })
        .then(function (error) {
          console.log(error);
        });
    }
  };

  const [logged] = useAuth();

  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  // Handling redirect to the dashboard
  const redirectToDashboard = () => {
    return (
      <Redirect to={user_type === "student" ? "/dashboard" : "/dashboard"} />
    );
  };

  return !logged ? (
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
                errorMessage={emailErr}
              />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <Input
                className="form-input"
                type={"password"}
                Text={"Password"}
                onChange={handlePasswordChange}
                errorMessage={passwordErr}
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
          <Link
            to={user_type === "tutor" ? "/signup/tutor" : "/signup/student"}
          >
            <MontserratLightText Text={"Don't have an account?"} />
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/dashboard" />
  );
}

export default Login;
