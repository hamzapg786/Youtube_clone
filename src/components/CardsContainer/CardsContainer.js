import React from "react";
import Card from "../Card/Card";
import Data from "../Data";
import "./CardsContainer.css";

const CardsContainer = () => {
  return (
    <div className="cards_container">
      {Data.map((e, i) => (
        <Card card={e} />
      ))}
    </div>
  );
};

export default CardsContainer;
