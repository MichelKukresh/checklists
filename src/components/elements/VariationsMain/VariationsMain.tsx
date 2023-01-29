import React from "react";
import VariationsList from "../VariationsList/VariationsList";
import "./VariationsMain.css";

const VariationsMain: React.FunctionComponent = () => {
  return (
    <div className="VariationsMain">
      <ul className="VariationsMain_lists" >
      <VariationsList title="Да / Нет / NA"></VariationsList>
      <VariationsList title="Числовое поле"></VariationsList>
      <VariationsList title="Чек-бокс"></VariationsList>
      </ul>
    </div>
  );
};

export default VariationsMain;
