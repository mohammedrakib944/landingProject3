import "./Home.css";
import Nav from "../../components/nav/Nav";
import LandingImg from "../../Assets/img/LandingCard.svg";
import LandingCard from "../../components/LandingCard/LandingCard";
import { landingCardData } from "./data.js";

const Home = () => {
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
              <div className="ItemCenter">
                <img src={LandingImg} width="100%" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="landingFooter">
                <h4>Ready to start studying? Select your exam to begin</h4>
                <div className="landingCards">
                  {landingCardData.map((val, index) => (
                    <LandingCard data={val} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
