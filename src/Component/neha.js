import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUserDelete } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";
import "./Nav.css";

function Nav() {
  const [activeNav, SetActiveNav] = useState("/");
  return (
    <>
      <a
        href="/"
        onClick={() => SetActiveNav("/")}
        className={activeNav === "/" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="/about"
        onClick={() => SetActiveNav("/about")}
        className={activeNav === "/about" ? "active" : ""}
      >
        <AiOutlineUserDelete />
      </a>
      <a
        href="/experience"
        onClick={() => SetActiveNav("experience")}
        className={activeNav === "/experience" ? "active" : ""}
      >
        <AiOutlineBook />
      </a>
      <a
        href="/services"
        onClick={() => SetActiveNav("/services")}
        className={activeNav === "/services" ? "active" : ""}
      >
        <MdMiscellaneousServices />
      </a>
      <a
        href="/contect"
        onClick={() => SetActiveNav("/contect")}
        className={activeNav === "/contect" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </>
  );
}
export default Nav;
