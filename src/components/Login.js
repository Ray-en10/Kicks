import React, { useState } from "react";
import "../css/login.css";
import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    const loginContainer = document.getElementById("login-container");
    loginContainer.classList.add("right-panel-active");
  };

  const handleSignInClick = () => {
    const loginContainer = document.getElementById("login-container");
    loginContainer.classList.remove("right-panel-active");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Check if email and password match admin credentials
    if (email === "admin" && password === "admin") {
      // Redirect to admin page using navigate
      navigate("/Admin");
    } else {
      // Handle other login logic or display error message
      console.log("Invalid credentials");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign up logic
    console.log("Sign Up logic");
  };

  return (
    <div className="logpage">
      <div className="formlog">
        <div className="login-container" id="login-container">
          <div className="form-container sign-up-container">
            <form onSubmit={handleSignUp}>
              <h1 className="tit">Create Account</h1>
              <div className="social-container">
                <a aria-label="Log in with Google" className="icon">
                  <FaGoogle />
                </a>
                <a aria-label="Log in with Facebook" className="icon">
                  <FaFacebook />
                </a>
                <a aria-label="Log in with Twitter" className="icon">
                  <FaTwitter />
                </a>
              </div>
              <input type="text" placeholder="Name" />
              {/* Add necessary onChange handlers for name if needed */}
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="button1" type="submit">
                Sign Up
              </button>
              <Link className="back" to="/">
                Go Back To Home Page
              </Link>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form onSubmit={handleSignIn}>
              <h1 className="tit">Sign in</h1>
              <div className="social-container">
                <a aria-label="Log in with Google" className="icon">
                  <FaGoogle />
                </a>
                <a aria-label="Log in with Facebook" className="icon">
                  <FaFacebook />
                </a>
                <a aria-label="Log in with Twitter" className="icon">
                  <FaTwitter />
                </a>
              </div>
              <input
                type="text"
                placeholder="UserName"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <a href="#">Forgot your password?</a>
              <button className="button1" type="submit">
                Sign In
              </button>
              <Link className="back" to="/">
                Go Back To Home Page
              </Link>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="blur-background"></div>
              <div className="overlay-panel overlay-left">
                <button
                  className="button1"
                  onClick={handleSignInClick}
                  id="signIn"
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <button
                  className="button1"
                  onClick={handleSignUpClick}
                  id="signUp"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
