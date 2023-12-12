import bannerImg from "./../../assets/banner.gif";
import { Typewriter } from "react-simple-typewriter";
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
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5">
      <div className="m-5 flex flex-col  justify-center lg:ml-40 ">
        <h3 className="font-bold text-xl">I'm</h3>
        <h1 className="font-bold text-2xl text">Hassan MD. Sharfuddin Miraz</h1>
        <h1
          style={{ paddingTop: "5px", margin: "0", fontWeight: "normal" }}
        >
          {/* Life is simple{" "} */}
          <span style={{ color: "cyan", fontWeight: "bold" }}>
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
        <div>
            <button className="btn">Download Resume</button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={bannerImg} alt="" className="w-40 h-40"/>
      </div>
    </div>
  );
};

export default Banner;
