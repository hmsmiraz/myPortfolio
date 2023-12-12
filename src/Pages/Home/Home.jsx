import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/Contact";
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
           <Contact></Contact>
        </div>
    );
};

export default Home;