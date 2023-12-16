import { FaGithub, FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import img from "../../public/I.svg"
const Footer = () => {
  return (
    <footer className="footer p-5">
      <aside>
        <p>
          <img src={img} alt="" className="w-20 h-20" />
          <p className="font-semibold">Copyright © 2023 - All right reserved by hms<span className="text-cyan-600">miraz</span></p>
        </p>
      </aside>
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <Link to="https://github.com/hmsmiraz">
            <FaGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/hassan-md-sharfuddin-miraz-51b254172/">
            <FaLinkedin />
          </Link>
          <Link to="https://www.facebook.com/hassanmdsharfuddin.miraz.9">
            <FaFacebook />
          </Link>
          <Link to="https://twitter.com/hmsmiraz">
            <FaXTwitter />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
