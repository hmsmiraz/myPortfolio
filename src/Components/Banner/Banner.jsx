import bannerImg from "./../../assets/banner.gif";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ResumePdf from "./../../assets/Resume.pdf";
const Banner = () => {
  // "Front End Developer", "Mern Stack Developer"
  const handleType = () => {
    // access word count number
    // console.log(count)
  };
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 my-5">
      <div className=" flex flex-col  justify-center relative lg:m-20">
        <div className="absolute flex flex-col bg-base-300 rounded-lg gap-4 text-xl p-2">
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
        <div className="mx-2 ml-16">
          <h3 className="font-bold text-xl">I'm</h3>
          <h1 className="font-bold text-2xl text">
            Hassan MD. Sharfuddin Miraz
          </h1>
          <h1 style={{ paddingTop: "5px", margin: "0", fontWeight: "normal" }}>
            {/* Life is simple{" "} */}
            <span style={{ color: "#0174BE", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Front End Developer", "Mern Stack Developer"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h1>
          <p className="font-semibold">I am the puppeteer of perception, crafting interfaces that dance with your fingertips.</p>
          <div className="my-2">
            <a
              href={ResumePdf}
              className="btn btn-primary text-white"
              download={"Resume"}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
