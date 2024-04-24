import React from "react";
import "./Demopage.css";
import { useNavigate } from "react-router-dom";
const Demopage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="demo-container">
      <div className="demo-box">
        <div className="demo-wrapper">
          {/* main heading */}
          <div className="main-heading">
            <div className="demo-Intro-text">
              <div className="title1">
                See What Cuisine Captain Can Do For You
              </div>
              <div className="demo-text">
                Share your goals with us, and our product experts will be
                pleased to demonstrate how Cuisine Captain can assist you in
                achieving them through efficient and optimized back-of-house
                operations. Our AI-powered solutions help you understand
                consumer habits to make better decisions in Recipe Developments,
                sales, marketing, and operations.
              </div>
            </div>
            <div className="demo-intro-logo">
              <img src="/demointo.png" />
            </div>
          </div>
          {/* sub heading */}
          <div className="sub-heading">
            <div>
              <img src="./demoAssist.png" />
            </div>
            <div>
              <div className="title2">Here's how we can assist you</div>
              <div>
                Cut down market research time from weeks to hours and get closer
                to your consumers and their moments of consumption Access
                insights from recipes, social media, and menus in your category
                Analyze diet, ingredient, and dish trends effortlessly segment
                consumer audiences for targeted marketing campaigns identify the
                foodservice sales opportunities.
              </div>
            </div>
          </div>
          <div className="demo-request-form">
            <div className="demo-request-box">
              <div className="demo-request-wrapper">
                {/* first and last name */}
                <div className="name-input demo-flex-box">
                  <div className="details-box ">
                    <label>FIRST NAME*</label>
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="details-box ">
                    <label>LAST NAME*</label>
                    <input type="text" placeholder="First Name" />
                  </div>
                </div>
                {/* company name */}
                <div className="company-info details-box">
                  <label>COMPANY NAME*</label>
                  <input placeholder="Company Name" />
                </div>
                {/* email */}
                <div className="email-info  details-box">
                  <label>EMAIL*</label>
                  <input placeholder="Please use a company email address" />
                </div>
                {/* type of company and location */}
                <div className="email-info demo-flex-box">
                  <div className="details-box ">
                    <label>COMPANY TYPE*</label>
                    <select>
                      <option>Select your company type</option>
                      <option>Restaurant</option>
                      <option>Cloud kitchen</option>
                      <option>F&B vendors</option>
                    </select>
                  </div>
                  <div className="details-box ">
                    <label>LOCATION*</label>
                    <input type="text" placeholder="Locattion" />
                  </div>
                </div>
                {/* button for submit */}
                <div className=" demo-submit-btn details-box ">
                  <input
                    type="submit"
                    value="Get Demo "
                    onClick={handleNavigate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demopage;
