import { FC } from "react";
import "./HomePage.scss";
import sep from "../../../assets/images/pattern-divider-desktop.svg";
import dice from "../../../assets/images/icon-dice.svg";
const HomePage: FC = () => {
  return (
    <div className="home-container">
      <div className="home-container__text-box">
        <div className="home-container__title">ADVICE #117</div>
        <div className="home-container__advice">
          “It is easy to sit up and take notice, what's difficult is getting up
          and taking action.”
        </div>
        <img className="home-container__sep" src={sep} alt="" />
      </div>
      <div className="home-container__dice">
        <img className="home-container__dice-img" src={dice} />
      </div>
    </div>
  );
};
export default HomePage;
