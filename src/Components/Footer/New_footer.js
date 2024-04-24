import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";
const New_footer = () => {
  return (
    <div className="footer_container">
      <div className="footer-box">
        <div className="footer-text">
            {/* top logo img */}
          <div className="Footer-header-text">
            <div className="footer-logo">
              <img src="./captainlogo.png" />
              {/* <img src="file:///C:/Users/heman/AppData/Local/Temp/Temp1_SVG%20files%20icons.zip/SVG%20files%20icons/people-collaborating-with-tech.svg"/> */}
            </div>
            <div>CUISINE CAPTAIN</div>
          </div>
          <div className="footer-details">
            {/* for social img  */}
            <div className="text-footer-right flexBox3 flex-gap">
              <div className="footer-icon">
                <a
                  href="https://www.facebook.com/profile.php?id=100093209774232&mibextid=ZbWKwL"
                  target="blank"
                  // style={{ color: "white" }}
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://instagram.com/cuisinecaptain"
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
              <div className="WebPagement-solution ">
                <i>"Cuisine Captain" </i> All Rights reserved
                <div>
                  Cuisine Captain is the most complete F&B management platform
                  for multi-unit restaurants, hotel, ghost kitchens.
                </div>
              </div>
              <div className="Flex-for-Row flex-gap">
                <p className="text-color">Privacy Policy</p>
                <p className="text-color">Terms & Conditions</p>
              </div>
            </div>
            {/* solutions */}
            <div className="flexBox2 flex-gap">
              <div className="text-color">SOLUTIONS</div>
              <div>
                Feature overview & Insights Restaurant Management Sales
                Analytics Showcase Access Information From Anywhere Easily
                Integrate
              </div>
              <div>Data-Driven Insights</div>
            </div>
            {/* features */}
            <div className="flexBox1 flex-gap ">
              <div className="text-color">FEATURES</div>
              <div>Actionable Sales</div>
              <div>Insights</div>
              <div>Menu Management</div>
              <div>Revenue Optimization</div>
              <div>Marketing Solutions</div>
            </div>
            {/* Customers */}
            <div className="flexBox1 flex-gap ">
              <div className="text-color">Customers</div>
              <div>Restaurants</div>
              <div>Chain restaurants</div>
              <div>cloud kitchens</div>
              <div>F&B services</div>
            </div>
            {/* write for us */}
            <div className="small-footer-box1 flex-gap ">
              <div className="text-color">Write for us</div>
              <div>Help & Support</div>
              <div>Blog</div>
              <div>FAQ</div>
              <div>Contact us</div>
            </div>
            {/* Resources */}
          
            <div className="small-footer-box flex-gap">
              <div className="text-color">Resources</div>
              <div>Blog</div>
              <div>eBooks</div>
              <div>Events</div>
            </div>
            {/* Language */}
            <div className="flexBox4 flex-gap">
              <div className="text-color"> Language & Country</div>
              <div>LANGUAGE</div>
              <div>English</div>
              <div>COUNTRY</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default New_footer;
