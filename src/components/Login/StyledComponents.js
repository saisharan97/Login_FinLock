import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LoginFormContainer = styled.div`
  width: 35vw;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  //   border: solid black;
  @media all and (max-width: 481px) {
    width: 90vw;
  }
  @media all and (max-width: 769px) {
    width: 70vw;
  }
`;

export const FooterContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  @media all and (max-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const LoginForm = styled.form``;

export const MainHeading = styled.h1`
  color: #0b3558;
  font: normal normal bold 48px/65px Open Sans;
  margin: 0;
`;

export const Para = styled.p`
  /* UI Properties */
  text-align: center;
  font: normal normal normal 20px/27px Open Sans;
  letter-spacing: 0px;
  color: #0b3558;
  opacity: 1;
  margin: 0 0 1rem 0;
`;

export const ForgotPasswordPara = styled.p`
  color: #003fb9;
  margin-right: 10px;
  cursor: pointer;
  font: normal normal 600 20px/27px Open Sans;
  :hover {
    color: #002e86;
  }
`;

export const PoweredByPara = styled.p`
  color: grey;
  margin-right: 10px;
  font: normal normal normal 20px/27px Open Sans;
  cursor: pointer;
`;

export const Span = styled.span`
  color: grey;
  font: normal normal normal 20px/27px Open Sans;
`;
