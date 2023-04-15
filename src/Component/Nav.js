import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUserDelete } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [activeNav, SetActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => SetActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#About"
        onClick={() => SetActiveNav("#About")}
        className={activeNav === "#About" ? "active" : " "}
      >
        <AiOutlineUserDelete />
      </a>
      <a
        href="#Experience"
        onClick={() => SetActiveNav("#Experience")}
        className={activeNav === "#Experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#Services"
        onClick={() => SetActiveNav("#Services")}
        className={activeNav === "#Services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#Contact"
        onClick={() => SetActiveNav("#Contact")}
        className={activeNav === "#Contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}
export default Nav;
