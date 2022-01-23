import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import Sidebar from "../Sidebar/Sidebar";
import "./Main.css";
const Main = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <CardsContainer />
      </div>
    </div>
  );
};

export default Main;
