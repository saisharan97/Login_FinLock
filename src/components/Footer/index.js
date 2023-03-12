import {
  FooterContainer,
  ForgotPasswordPara,
  PoweredByPara,
  Span,
} from "../Login/StyledComponents";

import "./index.css";

const Footer = () => (
  <FooterContainer>
    <div className="footer">
      <PoweredByPara>Powered by</PoweredByPara>
      <div style={{ alignSelf: "center", cursor: "pointer" }}>
        <img
          src="https://res.cloudinary.com/dqra4ctyw/image/upload/v1678617512/zaperon_logo_dgigp1.jpg"
          alt="aperon"
        />
      </div>
    </div>

    <div className="footer">
      <ForgotPasswordPara>Need Help?</ForgotPasswordPara>
      <ForgotPasswordPara>
        Privacy Policy <Span>&</Span> Terms
      </ForgotPasswordPara>
    </div>
  </FooterContainer>
);

export default Footer;
