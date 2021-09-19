import { useState } from "react";
import "../../styles/signup/signup.css";
import { IconmonstrAngelLeftCircleThin } from "../icons";
import { BreeText, MontserratLightText, Input, Button } from "../generic";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Signup({ user_type }) {
  // Form Data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Form Errors
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

  // Authentication
  const [signUpComplete, setSignUpComplete] = useState(false);

  const validateName = (name) => {
    // Make the name field is not empty
    !name ? setNameErr("Name field cannot be empty") : setNameErr("");
  };

  const validateEmail = (email) => {
    // Checks whether the email conforms to the specifications
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
      ? setEmailErr("Email is invalid")
      : setEmailErr("");
  };

  const validatePassword = (password) => {
    !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)
      ? setPasswordErr(
          "Password should be at least six character. Password should contain 1 lowercase, 1 uppercase and 1 number"
        )
      : setPasswordErr("");
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    !(password === confirmPassword)
      ? setConfirmPasswordErr("Passwords do not match")
      : setConfirmPasswordErr("");
  };

  // Axios Setup
  const instance = axios.create({
    baseURL: "http://127.0.0.1:5000/",
  });

  const onSubmitClick = (event) => {
    event.preventDefault();

    // Run the checks
    validateName(name);
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(password, confirmPassword);

    if (!nameErr & !emailErr & !passwordErr & !confirmPasswordErr) {
      instance({
        method: "post",
        url: "auth/signup",
        data: {
          name: name,
          email: email,
          password: password,
          ...(user_type === "student" && { user_type: "student" }),
          ...(user_type === "tutor" && { user_type: "tutor" }),
        },
      })
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            toast.success("Sign up successful", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }

          setSignUpComplete(true);

          if (response.status === 401) {
            toast.error("Sign up not successful", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }
        })
        .then(function (error) {
          console.log(error);
        });
    }
  };

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) =>
    setConfirmPassword(event.target.value);

  return !signUpComplete ? (
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
              errorMessage={nameErr}
            />
            <Input
              className="signup-form-input"
              type={"text"}
              Text={"Email"}
              onChange={handleEmailChange}
              errorMessage={emailErr}
            />
            <Input
              className="signup-form-input"
              type={"password"}
              Text={"Password"}
              onChange={handlePasswordChange}
              errorMessage={passwordErr}
            />
            <Input
              className="signup-form-input"
              type={"password"}
              Text={"Confirm Password"}
              onChange={handleConfirmPasswordChange}
              errorMessage={confirmPasswordErr}
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
          <Link to={user_type === "tutor" ? "/login/tutor" : "/login/student"}>
            <MontserratLightText Text={"Already have an account?"} />
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to={user_type === "tutor" ? "/login/tutor" : "/login/student"} />
  );
}

export default Signup;
