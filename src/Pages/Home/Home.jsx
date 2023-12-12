import Banner from "../../Components/Banner/Banner";
import Education from "../../Components/Education/Education";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Skills></Skills>
           <Education></Education>
           <Projects></Projects>
        </div>
    );
};

export default Home;