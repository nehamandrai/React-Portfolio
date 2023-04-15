import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Egator
      </a>
      <ul className="permalinks">
        <ol>
          <a href="#" className="text-xl">
            Home
          </a>
        </ol>
        <ol>
          <a href="#About" className="text-xl">
            About
          </a>
        </ol>
        <ol>
          <a href="#Experience" className="text-xl">
            Experience
          </a>
        </ol>
        <ol>
          <a href="#Services" className="text-xl">
            services
          </a>
        </ol>
        <ol>
          <a href="#Portfolio" className="text-xl">
            Portfolio
          </a>
        </ol>
        <ol>
          <a href="#Testomonial" className="text-xl">
            Testomonial
          </a>
        </ol>
        <ol>
          <a href="#Contact" className="text-xl">
            Contact
          </a>
        </ol>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <AiOutlineInstagram />
        </a>
        <a href="https://twitter.com">
          <AiOutlineTwitter />
        </a>
      </div>
    </footer>
  );
}
