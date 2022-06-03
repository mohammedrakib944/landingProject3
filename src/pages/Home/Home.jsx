import { useState } from "react";

import "./Home.css";
import Nav from "../../components/nav/Nav";
import LandingImg from "../../Assets/img/LandingCard.svg";
import LandingCard from "../../components/LandingCard/LandingCard";
import { landingCardData, card2Data, CardData } from "./data.js";
import Icard from "./Icard";
import Card from "../../components/card/Card";
import CodeImg from "../../Assets/img/code.svg";
import Clone from "../../Assets/img/clone.svg";
import WillSmith from "../../Assets/img/man.png";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const [tag, setTag] = useState("ielts");
  return (
    <>
      <Nav />
      <div className="landingWrapper">
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-md-5">
              <div className="ItemCenter">
                <h1>
                  Mastering the Skill of Test-taking is the Key to Achieving
                  your Goals
                </h1>
              </div>
            </div>
            <div className="col-md-5">
              <div className="ItemCenter mobileItemCenter">
                <img src={LandingImg} alt="" width="100%" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="landingFooter">
                <h4>Ready to start studying? Select your exam to begin</h4>
                <div className="landingCards">
                  {landingCardData.map((val) => (
                    <LandingCard key={val.id} data={val} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              {/* add space */}
              <div className="addSpace">
                <h4>ADD SPACE</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="sCardData">
                <h5>WHAT WE DO</h5>
                <h2>When Ambition Meets Opportunity, Anything is Possible</h2>
                <p>
                  Established in 2020, the Flashsheets is a public-spirited
                  institution that makes distinctive contributions to society in
                  research, learning
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="smallCards">
                {card2Data.map((val, index) => (
                  <Icard key={index} data={val} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              {/* add space */}
              <div className="addSpace">
                <h4>ADD SPACE</h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="s4Header">
                <h2>Latest Test Releases</h2>
                <div className="s4Filters">
                  <select
                    className="form-select customFS"
                    aria-label="Default select example"
                  >
                    <option defaultValue>Popular</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="tags">
                <ul className="tagsUl">
                  <li>
                    <button
                      onClick={() => setTag("ielts")}
                      className={tag === "ielts" && "active2"}
                    >
                      IELTS
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setTag("toefl")}
                      className={tag === "toefl" && "active2"}
                    >
                      TOEFL
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setTag("sat")}
                      className={tag === "sat" && "active2"}
                    >
                      SAT
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setTag("earlyAccess")}
                      className={tag === "earlyAccess" && "active2"}
                    >
                      EARLY ACCESS
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setTag("free")}
                      className={tag === "free" && "active2"}
                    >
                      FREE
                    </button>
                  </li>
                </ul>
              </div>
              <div className="MainCards">
                {CardData.filter((val) => val.tag === tag).map((val, index) => (
                  <Card key={index} data={val} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="uf">
                <h2>Check what our students are saying!</h2>
                <p>
                  Let's have a platform, a medium, where we could share stuff
                  with each other
                </p>
                <div className="divCenter">
                  <img src={CodeImg} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ufr">
                <img src={Clone} alt="" />
                <p>
                  I would not be in the career I am now without the hands-on
                  practical experience that I received while using Flashsheets
                  online. Known for its incredible family-style and
                  entrepreneurial culture.{" "}
                </p>
                <img src={WillSmith} alt="" className="willSmilth" />
                <h4>Will Smith</h4>
                <span>Postgraduate student</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
