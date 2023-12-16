import SharedTitle from "../../Shared/SharedTitle";
import Img from "./../../assets/IMG.png";
import { motion } from "framer-motion";
import "./about.css";
import { useState } from "react";
const About = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen1, setOpen1] = useState(false);
  return (
    <div className="my-2  ">
      <SharedTitle heading={"About me"}></SharedTitle>
      <div className="flex flex-col md:flex-row gap-5 items-start justify-center ">
        <div className="flex items-center justify-center w-1/2">
          <div className="">
            <img src={Img} alt="" className="w-40 h-40 lg:w-64 lg:h-60" />
          </div>
        </div>
        <div className="w-1/2 mx-5 my-2 relative">
          <motion.div
            transition={{ layout: { duration: 1, type: "spring" } }}
            layout
            onClick={() => setOpen(!isOpen)}
            className="card w-64 lg:w-96"
            style={{
              // width: "18rem",
              borderRadius: "1rem",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            <motion.h2 layout="position" className="font-bold uppercase">About</motion.h2>

            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
                className="expand"
              >
                <p>
                  I'm Hassan Md. Sharfuddin Miraz, a passionate front-end
                  developer currently carving my path through the Master's in
                  CSE at Port City International University.
                </p>
              </motion.div>
            )}
          </motion.div>
          <motion.div
            transition={{ layout: { duration: 1, type: "spring" } }}
            layout
            onClick={() => setOpen1(!isOpen1)}
            className="card w-64 lg:w-96 lg:absolute lg:ml-10 mt-2"
            style={{
              // width: "18rem",
              borderRadius: "1rem",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            <motion.h2 layout="position"className="font-bold uppercase">My Passion </motion.h2>

            {isOpen1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
                className="expand"
              >
                <p>
                  Code is my canvas, pixels my brushstrokes. With React as my
                  trusty companion, I weave interactive experiences that
                  captivate and delight users. But my journey does not stop at
                  the browser window. I delve into the world of Node, Express,
                  and MongoDB, building robust backend structures that power the
                  magic. Firebase fuels my passion for user authentication and
                  real-time experiences, while Git keeps my code organized and
                  collaborative
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
