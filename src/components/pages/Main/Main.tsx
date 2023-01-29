import React from "react";
import CardList from "../../elements/CardList/CardList";
import VariationsMain from "../../elements/VariationsMain/VariationsMain";
import "./Main.css";

const Main: React.FunctionComponent = () => {
  return (
    <main className="Main">
      <VariationsMain></VariationsMain>
      <CardList></CardList>
    </main>
  );
};

export default Main;
