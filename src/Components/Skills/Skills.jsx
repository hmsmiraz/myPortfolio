import SharedTitle from "../../Shared/SharedTitle";
import htmlImg from "../../assets/icon/HTML.png";
import cssImg from "../../assets/icon/css.png";
import javascriptImg from "../../assets/icon/JavaScript.png";
import reactImg from "../../assets/icon/react.png";
import tailwindImg from "../../assets/icon/tailwind.png";
import expressImg from "../../assets/icon/express.png";
import firebaseImg from "../../assets/icon/firebase.png";
import nodeImg from "../../assets/icon/node.png";
import mongoImg from "../../assets/icon/mongo.png";


const Skills = () => {
  return (
    <div className="my-5">
      <div>
        <SharedTitle
          heading={"My Tech Stack"}
          subHeading={" Technologies I’ve been working with recently"}
        ></SharedTitle>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
       <div className="flex gap-2">
        <img src={htmlImg} alt="" />
        <img src={cssImg} alt="" />
        <img src={javascriptImg} alt="" />
       </div>
       <div className="flex gap-2">
        <img src={tailwindImg} alt="" />
        <img src={reactImg} alt="" />
        <img src={nodeImg} alt="" />
       </div>
       <div className="flex gap-2">
        <img src={expressImg} alt="" />
        <img src={mongoImg} alt="" />
        <img src={firebaseImg} alt="" />
       </div>
      </div>
    </div>
  );
};

export default Skills;
