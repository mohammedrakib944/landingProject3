import "./Footer.css";
import Logo from "../../Assets/img/FooterLogo.svg";

const Footer = () => {
  return (
    <div className="footerWeapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="footerContent">
              <div className="upperFooter">
                <div className="aboutUs">
                  <h5 className="footerTitle">About Us</h5>
                  <p>
                    Flashtests is an online examination platform that allows
                    users to prepare for the exam with real test like
                    conditions. We are aiming toward creating a one-stop online
                    platform that covers all of your (users’?) exam preparation
                    concerns (needs?). Flashtests offers both a free and a
                    premium version, each with its own set of features. Our team
                    is highly motivated in providing outstanding services that
                    will help to improve your (users’) test taking skills.
                  </p>
                </div>
                <div className="footerMenu">
                  <h5 className="footerTitle">Menu</h5>
                  <ul className="footerMenuUl">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Tests</a>
                    </li>
                    <li>
                      <a href="#">Prices</a>
                    </li>
                    <li>
                      <a href="#">Classrooms</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                  </ul>
                </div>
                <div className="contactUs">
                  <h5 className="footerTitle">Contact Us</h5>
                  <h2>Have any questions or issues?</h2>
                  <div className="fmm">
                    <i class="fa-solid fa-envelope"></i>
                    <span>john@abcd.com</span>
                  </div>
                  <div className="fmm">
                    <i class="fa-solid fa-phone-volume"></i>
                    <span>+1(646)-399-4883</span>
                  </div>
                </div>

                <div className="newsletter">
                  <h5 className="footerTitle">Newsletter</h5>
                  <input
                    type="email"
                    required
                    placeholder="example@gmail.com"
                  />
                  <button className="CustomBtn colorChange">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerMiddle">
        <div className="footerIcons">
          <a href="#">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="footerDown">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="downFooter">
                <img src={Logo} alt="" />
                <p>© Copyright Flashsheets. All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
