import "./Signin.css";

import Nav from "../../components/nav/Nav";
import Google from "../../Assets/img/google.png";

const Signin = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="signin">
              <h2 className="singinTitle">Sign In</h2>
              <div className="inputBox">
                <label htmlFor="#">Your Email *</label>
                <input
                  type="email"
                  className="input"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="inputBox">
                <label htmlFor="#">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="password"
                />
                <div className="align-item-right">
                  <span>Forgot Your Password?</span>
                </div>
              </div>
              <button className="input signIN">Sign In</button>
              <br />
              <p className="or">Or</p>
              <br />
              <button className="input">
                <img src={Google} alt="" width="20px" /> &nbsp; Sign-up with
                Google
              </button>
              <br />
              <p className="dont">
                Don't have an account? <span>Sign Up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
