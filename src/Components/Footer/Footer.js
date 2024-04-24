import { Button } from "@mui/material";
import React from "react";
import Arrow from "@mui/icons-material/ArrowForwardIos";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer-box">
        <div className="footer-text">
          <div className="Footer-header-text">CUISINE CAPTAIN</div>
          <div className="footer-details">
            <div className="text-footer-right flexBox">
              <div className="footer-icon">
                <a
                  href="https://www.facebook.com/profile.php?id=100093209774232&mibextid=ZbWKwL"
                  target="blank"
                  // style={{ color: "white" }}
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.linkedin.com/company/cuisine-captain/"
                  target="blank"
                  style={{ color: "#e15" }}
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.linkedin.com/company/cuisine-captain/"
                  target="blank"
                  style={{ color: "#4da0e9" }}
                >
                  <LinkedInIcon />
                </a>
              </div>
              <div className="WebPagement-solution">
                <i>"Cuisine Captain"</i> a restaurant analytics website can
                provide valuable insights and recommendations for a restaurant
                operators, allowing them to make data-driven decisions and
                improve the overall performance and profitability of their
                business.
              </div>
              <div className="Flex-for-Row">
                <p className="text-color">Privacy Policy</p>
                <p className="text-color">Terms of use</p>
              </div>
            </div>

            <div className="flexBox ">
              <div className="list-details">
                <div className="footer-content footer-mid-box">
                  <div className="text-color">Platform</div>
                  <div className="padding font ">Overview</div>
                  <div className="padding font">Web</div>
                  <div className="padding font">Cuisine</div>
                  <div className="padding font">Captain</div>
                </div>
                <div className="footer-divst footer-mid-box">
                  <div className="dev-box">
                    <div className=" text-color footer-gap">Developers</div>
                    <div className="text-color footer-gap font">Company</div>
                    <div className="text-color footer-gap font">Contact Us</div>
                    <div className="text-color footer-gap font">Careers</div>
                    <div className="text-color footer-gap ">About Us</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="address-box flexBox text-footer-left">
              <div className="WebPagement-solution">
                <div className="text-color">ADDRESS</div> <br />
                REGD. OFFICE ADDRESS Private Limited, Ksr , Delhi Road, HSR,
                Delhi, 560000, Delhi, India
              </div>
              <div className="email-box">
                <div className="email-text-field">
                  <div>Email - clienttfield@gmail.com</div>
                  <div>Contact No - +9655 xxxx xxx </div>
                </div>
                <div className="Web-tech">
                  © INDIZEAL SOFTWARE SOLUTIONS PVT. LTD.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
