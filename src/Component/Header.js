import Button from "./Button";
import HeaderSocial from "./HeaderSocial";
import "./header.css";

export default function Header() {
  return (
    <header className="mb-40 ">
      <div className="container header_container content-center">
        <h5>Hello I'm</h5>
        <h1 className="text-2xl">Neha Mandrai</h1>
        <h5 className="text-light"> React Developer</h5>
        <Button />
        <HeaderSocial />

        <div className="me">
          <img src="." alt="Me" />
        </div>
        <a href="#Contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
