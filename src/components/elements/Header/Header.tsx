import React from "react";
import "./Header.css";

interface PropsData {
  title?: string; // ? означает необизательный пункт
}

const Header: React.FunctionComponent<PropsData> = ({title}): JSX.Element => {
  return (
    <header className="Header">
    <div><h2 className="Header_ellipsis-lines">Конструктор - {title}</h2></div>
    <div>Поиск, добавить добро пожаловать, Пользователь</div>    
    </header>
  ) ;
};

export default Header;
