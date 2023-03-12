import { Navigate, useNavigate } from "react-router-dom";

import "./index.css";
import Cookies from "js-cookie";
import {
  AppContainer,
  LoginFormContainer,
  LoginForm,
  MainHeading,
} from "../Login/StyledComponents";

import { Button } from "@mui/material";
import Footer from "../Footer";

const Home = () => {
  let navigate = useNavigate();
  const onclickLogoutButton = () => {
    // console.log("log out");
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/login" />;
  }

  return (
    <AppContainer>
      <LoginFormContainer>
        <div className="img-container">
          <img
            src="https://res.cloudinary.com/dqra4ctyw/image/upload/v1678604271/ic_user_i6emvl.svg"
            className="login-img-prop"
            alt="website logo"
          />
        </div>

        <div>
          <MainHeading>Welcome Rahul!</MainHeading>
        </div>

        <LoginForm>
          <div>
            <Button
              type="button"
              variant="contained"
              id="login-button"
              onClick={onclickLogoutButton}
              sx={{ textTransform: "none" }}
            >
              Logout
            </Button>
          </div>
        </LoginForm>
      </LoginFormContainer>
      <Footer />
    </AppContainer>
  );
};

export default Home;
