import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

import "./index.css";
import Cookies from "js-cookie";
import {
  AppContainer,
  LoginFormContainer,
  LoginForm,
  MainHeading,
  Para,
  ForgotPasswordPara,
} from "./StyledComponents";

import { TextField, Button } from "@mui/material";
import Footer from "../Footer";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

// const validCredentials = {
//   email: "saisharan357@gmail.com",
//   password: "saisharan@123",
// };

const Login = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginAPIStatus, setLoginAPIStatus] = useState(
    apiStatusConstants.initial
  );
  const [showEmailErrorMessage, setShowEmailErrorMessage] = useState(false);
  const [showPasswordErrorMessage, setShowPasswordErrorMessage] = useState(
    false
  );

  const onchangeEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const onchangePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  let navigate = useNavigate();
  const onSubmitSuccess = async (jwtToken) => {
    await Cookies.set("jwt_token", jwtToken, {
      expires: 1,
      path: "/",
    });
    navigate("/");
  };

  const onSubmitForm = async (event) => {
    setLoginAPIStatus(apiStatusConstants.inProgress);
    setShowEmailErrorMessage(false);
    setShowPasswordErrorMessage(false);
    event.preventDefault();

    const userDetails = {
      username: Email.split("@")[0],
      password,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const url = "https://apis.ccbp.in/login";
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    if (response.status === 200) {
      setEmail("");
      setPassword("");
      setLoginAPIStatus(apiStatusConstants.success);
      onSubmitSuccess(data.jwt_token);
    } else {
      setShowEmailErrorMessage(true);
      setShowPasswordErrorMessage(true);
      setLoginAPIStatus(apiStatusConstants.failure);
    }

    //Using Local Storage
    // if (Email === validCredentials.email) {
    //   if (password === validCredentials.password) {
    //     setTimeout(() => {
    //       setLoginAPIStatus(apiStatusConstants.success);
    //       onSubmitSuccess("valid_user");
    //     }, 2000);
    //   } else {
    //     setShowPasswordErrorMessage(true);
    //     setLoginAPIStatus(apiStatusConstants.failure);
    //   }
    // } else {
    //   setShowEmailErrorMessage(true);
    //   setLoginAPIStatus(apiStatusConstants.failure);
    // }
  };

  const renderLoader = () => (
    <div className="loader-container" style={{ color: "#ffffff" }}>
      <Oval
        height={30}
        width={30}
        color="white"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#FFFFFF"
      />
    </div>
  );

  const renderButtonDetails = () => {
    // return this.renderLoader();

    switch (loginAPIStatus) {
      case "INITIAL":
        return "Sign In";
      case "IN_PROGRESS":
        return renderLoader();
      case "SUCCESS":
        return "Success";
      case "FAILURE":
        return "Sign In";
      default:
        return null;
    }
  };

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken !== undefined) {
    return <Navigate to="/" />;
  }

  return (
    <AppContainer>
      {/* <div style={{ textAlign: "left" }}>
            <h1>Sample Credentials</h1>
            <p>Email: rahul</p>
            <p>Password: rahul@2021</p>
          </div> */}

      <LoginFormContainer>
        <div className="img-container">
          <img
            src="https://res.cloudinary.com/dqra4ctyw/image/upload/v1678604271/ic_user_i6emvl.svg"
            className="login-img-prop"
            alt="website logo"
          />
        </div>

        <div>
          <MainHeading>Welcome!</MainHeading>
          <Para>
            Let's connect to your workspace.
            <br /> Please enter your email to continue.
          </Para>
        </div>

        <LoginForm onSubmit={onSubmitForm}>
          <div style={{ marginBottom: "1rem", textAlign: "left" }}>
            <TextField
              id="Email-input"
              label="Email Address"
              variant="outlined"
              type="text"
              className="input-element"
              value={Email}
              onChange={onchangeEmailInput}
              error={showEmailErrorMessage}
            />
            {showEmailErrorMessage && (
              <p className="warning-text">Please enter a valid email.</p>
            )}
          </div>

          <div style={{ marginBottom: "1rem", textAlign: "left" }}>
            <TextField
              id="password-input"
              label="Password"
              variant="outlined"
              type="password"
              className="input-element"
              value={password}
              onChange={onchangePasswordInput}
              error={showPasswordErrorMessage}
            />
            {showPasswordErrorMessage && (
              <p className="warning-text">Please enter a valid password.</p>
            )}
          </div>

          <div style={{ marginBottom: "1rem", textAlign: "right" }}>
            <ForgotPasswordPara>Forgot Password?</ForgotPasswordPara>
          </div>

          <div>
            <Button
              type="submit"
              variant="contained"
              id="login-button"
              sx={{ textTransform: "none" }}
            >
              {renderButtonDetails()}
            </Button>
          </div>

          {/* {isWarningTextVisible && (
            <p className="warning-text">*{errorMessage}</p>
          )} */}
        </LoginForm>
      </LoginFormContainer>
      <Footer />
    </AppContainer>
  );
};

export default Login;
