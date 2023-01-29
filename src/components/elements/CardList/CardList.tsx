import React from "react";
import "./CardList.css";
import emptyConstructor from "../../../images/empty-constructor.svg";
import MyButton, { VariantBackColor, VariantTextColor } from "../MyButton/MyButton";

const CardList: React.FunctionComponent = () => {
  return (
    <div className="CardList">
      <article className="CardList_headers">
        <MyButton
          title="Сохранить и выйти"
          height="50px"
          textColor={VariantTextColor.blue}
          backColor={VariantBackColor.blue}
        ></MyButton>
        <MyButton
          title="Предварительный просмотр"
          height="50px"
          textColor={VariantTextColor.grey}
          backColor={VariantBackColor.grey}
        ></MyButton>
        <MyButton
          title="Скачать"
          height="50px"
          textColor={VariantTextColor.grey}
          backColor={VariantBackColor.grey}
        ></MyButton>
        <MyButton
          title="Сохранить"
          height="50px"
          textColor={VariantTextColor.grey}
          backColor={VariantBackColor.grey}
        ></MyButton>
      </article>
      <article className="CardList_add-place">        
        <img alt="заставка-демонстрационная" src={emptyConstructor}></img>
        <div><MyButton
          title="Добавить"
          height="50px"
          textColor={VariantTextColor.grey}
          backColor={VariantBackColor.grey}
        ></MyButton></div>
      </article>
    </div>
  );
};

export default CardList;
