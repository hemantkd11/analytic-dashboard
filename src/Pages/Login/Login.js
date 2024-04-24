import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="containers">
      {/* form */}
      <div className=" form-box  ">
        <div className="login-logo">
          <img src="./logoIcon.png" alt=" logo" />
        </div>
        <div className="wel-heading-login">
          <h3>Welcome To Cusine Captain</h3>
        </div>
        <div className="card">
          {/* <div className="card-header">
            <h3>Sign In</h3>
          </div> */}
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="username"
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                />
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" />
                Remember Me
              </div>
              <div
                className="form-group"
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                {/* <input type="submit" value="Login" className="btn float-right login_btn"></input> */}
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    padding: "10px  30px",
                    background: "gold",
                    border: "none",
                  }}
                >
                  <Link to={"/"}>Login</Link>{" "}
                </button>
              </div>
            </form>
          </div>
          <div className="card-footer ">
            <div className="d-flex justify-content-center links">
              Don't have an account?<a href="/signup">Sign Up</a>
            </div>
            <div className="d-flex justify-content-center">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
