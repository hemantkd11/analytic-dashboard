import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { USER_DETAILS } from "../../Apis/constant";
const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    password: "",
    user_name: "",
    error: "",
  });

  // const handleInput = (e) => {
  //   console.log(e.target.name, e.target.value);
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };
  const handleInput = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setData({ ...data, [name]: value });
  };

  const validateFields = () => {
    if (
      !data.email ||
      !data.first_name ||
      !data.last_name ||
      !data.phone ||
      !data.password ||
      !data.user_name
    ) {
      setData({ ...data, error: "All fields are required." });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setData({ ...data, error: "Invalid email format." });
      return false;
    }

    const phoneRegex = /^\+965[569]\d{7}$/;
    if (!phoneRegex.test(data.phone)) {
      setData({
        ...data,
        error: "Invalid phone number format. +965 and your 8 digits no.",
      });
      return false;
    }

    // Additional field validations can be added here

    return true;
  };

  const addProduct = async (e) => {
    e.preventDefault();
    console.log(data);

    if (validateFields()) {
      try {
        // const userListResponse = await fetch(USER_DETAILS);
        // const userList = await userListResponse.json();
        // // Check if the provided user_name already exists in the list
        // const isUserNameTaken = userList.some((user) => user.user_name === data.user_name);
        // if (isUserNameTaken) {
        //   setData({ ...data, error: "This username is already taken. Please choose a different one." });
        // }
        // else{}
        const response = await fetch(USER_DETAILS, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          // Registration successful
          Swal.fire("Thank You! User registered successfully");
          setData({ ...data, registrationSuccess: true });
          navigate("/signin");
        } else {
          // Registration failed
          const errorData = await response.json();
          // setData({ ...data, error: errorData.error });
          if (response.status === 400) {
            alert("email already taken");
          } else if (response.status === 401) {
            alert("user already taken");
          } else {
            setData({ ...data, error: errorData.detail });
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  // if (data.registrationSuccess) {

  //   Swal.fire('Thank You! user register successfully')
  //   navigate('/signin');
  // }

  return (
    <div className="containers-SignUp">
      {/* form */}
      <div className=" form-box-signUp  ">
        <div className="login-logo">
          <img src="./cclogo1.png" alt=" logo" />
        </div>
        <div className="wel-heading-login">
          <h3 className="si-h">Welcome To Cusine Captain</h3>
        </div>
        <div className="card">
          <div className="card-body">
            <form method="POST">
              {/* Error message */}
              {data.error && <div className="error-message">{data.error}</div>}
              {/* first name and last name */}
              <div className="form-input-filed-display">
                {/* usernasme */}
                <div className="input-signup-field">
                  <div className="input-set">
                    <label>Username *</label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="user_name"
                      value={data.user_name}
                      onChange={handleInput}
                      className="form-control"
                      placeholder="username"
                    />
                  </div>
                </div>
                {/* namee */}
                <div className="input-signup-field">
                  <div className="half-signup-field">
                    <label>Firstname *</label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="first_name"
                      value={data.first_name}
                      onChange={handleInput}
                      className="form-control"
                      placeholder="firstname"
                    />
                  </div>
                  <div className="half-signup-field">
                    <label>Lastname *</label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="last_name"
                      value={data.last_name}
                      onChange={handleInput}
                      className="form-control"
                      placeholder="lastname"
                      required
                    />
                  </div>
                </div>

                {/* Age and Phone number */}
                <div className="input-signup-field">
                  <div className="input-set">
                    <label>Phone *</label>
                    <input
                      type="text"
                      name="phone"
                      value={data.phone}
                      onChange={handleInput}
                      className="form-control"
                      autoComplete="off"
                      placeholder=" +965 5xxx xxxx"
                    />
                  </div>

                  <div className="input-set">
                    <label>Email*</label>
                    <input
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={handleInput}
                      className="form-control"
                      autoComplete="off"
                      placeholder="enter your email"
                      required
                    />
                  </div>
                </div>
                {/* password */}
                <div className="input-signup-field">
                  <div className="input-set">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={data.password}
                      onChange={handleInput}
                      className="form-control"
                      placeholder="password"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
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
                  onClick={addProduct}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Already have an account?<a href="/signin">Log In</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
