import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { AiOutlineDribbble } from "react-icons/ai";

export default function HeaderSocial() {
  return (
    <div className="header_social  ">
      <a href="https://linkedin.com" target="_blank">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="https://dribble.com" target="_blank">
        <AiOutlineDribbble />
      </a>
    </div>
  );
}
