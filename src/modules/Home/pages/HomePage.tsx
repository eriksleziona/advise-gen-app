import { FC } from "react";
import "./HomePage.scss";
import sep from "../../../assets/images/pattern-divider-desktop.svg";
import dice from "../../../assets/images/icon-dice.svg";
import { useGlobalContext } from "../../../Context/Context";
import { AppContextType } from "../../../Context/Context.Types";
const HomePage: FC = () => {
  const { adviceMsg, getAdvice } = useGlobalContext() as AppContextType;

  return (
    <div className="home-container">
      <div className="home-container__text-box">
        <div className="home-container__title">ADVICE #{adviceMsg.id}</div>
        <div className="home-container__advice">{adviceMsg.advice}</div>
        <img className="home-container__sep" src={sep} alt="" />
      </div>
      <div className="home-container__dice" onClick={() => getAdvice()}>
        <img className="home-container__dice-img" src={dice} />
      </div>
    </div>
  );
};
export default HomePage;
