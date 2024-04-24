import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate, Link } from "react-router-dom";
import { USER_LOGIN } from "../../Apis/constant";
const SignIn = ({ setIsAuthenticated, onLogin }) => {
  // const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [iserror, setIserror] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchdata();
  // },[]);

  // const fetchdata = async () => {
  //   await fetch("http://localhost:8080/login/", {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  //     console.log("mesage",data)
  // };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(USER_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const { access, first_name } = data;
        localStorage.setItem("token", access);
        localStorage.setItem("user",first_name );
        setIsAuthenticated(true);
       
        navigate("/toptrends");
        window.location.reload();
        // setUsername("");
        // setPassword("");
        // if (!!token) {
        //   setIsAuthenticated(true);

        //   navigate("/");
        // } else {
        //   setIsAuthenticated(false);
        //   alert("error no token");
        // }
      } else {
        setIserror("Invalid email && password ");
      }
    } catch (error) {
      console.log("Error occurred:", error);
      setIserror(true);
    }
  };

  return (
    <div className="signIn-container">
      <div className="signIn-form-box">
        <div className="signin-mainbody">
          <div className="sign-Up-Box">
            <div className="signIn-logo">
              <img src="./cclogo1.png" />
            </div>
          </div>

          <div className="signIn-heading">Login</div>
          <div>{iserror && <p style={{ color: "red" }}>{iserror}</p>}</div>
          <form autoComplete="on" onSubmit={handleLogin}>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              {/* username field */}
              <input
                type="email"
                className="form-control"
                placeholder="email"
                value={username}
                autoComplete="on"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-key"></i>
                </span>
              </div>
              {/* username field */}
              <input
                type="password"
                className="form-control"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
                className="btn-log-sign"
                style={{
                  width: "100%",
                  textAlign: "center",
                  padding: "10px  30px",
                  background: "gold",
                  border: "none",
                }}
              >
                Login
              </button>
            </div>
          </form>
          <div className="card-footer login-footer">
            <div className=" justify-content-center forgot-remember links">
              Don't have an account?
              <span>
                <a href="/signup">Sign Up</a>
              </span>
            </div>
            <div className="d-flex justify-content-center forgot-remember">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
      {/* signinn image box */}
      <div className="signIn-form-img-box">
        <div className="image-box">
          <div className="signin-box-image">
            {/* <img src="https://cdn.apicbase.com/apicbase/images/login_cover_page.png" /> */}
            <img src="./marktingdashboard.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
