import React from "react";
import "./Card.css";
const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={card.url} className="img" alt="" />
      <div className="card_content">
        <div className="card_content__left">
          <img src={card.url} className="thumbnail" />
          <div className="content">
            <p className="title" style={{ color: "black" }}>
              {card.title}
            </p>
            <p>Sony Sports Network</p>
            <p>1.5 million view</p>
          </div>
        </div>
        <div className="card_content__right">
          <p>.</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
