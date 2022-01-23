import React from "react";
import { FiMenu } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";
import { BiVideoPlus } from "react-icons/bi";
import { IoMdApps } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./Header.css";
import { useState } from "react/cjs/react.development";
const Header = () => {
  let [inputText, setInputText] = useState("");

  return (
    <div className="header">
      <div className="left-header">
        <FiMenu size={24} style={{ cursor: "pointer" }} />
        <BsYoutube size={25} style={{ cursor: "pointer", color: "red" }} />
      </div>
      <div className="middle_header">
        <div className="input_container">
          <input
            type="text"
            placeholder="Search"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <span
            className="close"
            style={{ opacity: inputText.length === 0 ? 0 : 1 }}
          >
            <IoCloseOutline size={23} onClick={() => setInputText("")} />
          </span>
        </div>
        <div className="search">
          <BiSearch size={23} />
        </div>
        <div className="mice">
          <MdKeyboardVoice />
        </div>
      </div>

      <div className="right-header">
        <BiVideoPlus size={25} style={{ cursor: "pointer" }} />
        <IoMdApps size={25} style={{ cursor: "pointer" }} />
        <IoMdNotificationsOutline size={25} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Header;

// onClick={() => setInputText("")}
// onChange={(e) => setInputText(e.target.value)}
// let [inputText, setInputText] = useState("");
