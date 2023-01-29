import React from "react";
import "./VariationsList.css";
import WarningCircle from "../../../images/WarningCircle.svg";
import Question from "../../../images/Question.svg";


interface PropsData {
  title: string;
  
}

const VariationsList: React.FunctionComponent<PropsData> = ({ title }) => {
  return (
    <li className="VariationsList">
      <p className="VariationsList_icon"></p>      
      <p className="VariationsList_title">{title}</p>
      <img className="VariationsList_image" alt="Внимание" src={WarningCircle}></img>
    </li>
  );
};

export default VariationsList;
