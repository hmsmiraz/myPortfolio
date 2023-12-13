import SharedTitle from "../../Shared/SharedTitle";
import Img from "./../../assets/IMG.png";

const About = () => {
  return (
    <div className="my-5 bg-stone-100 ">
      <SharedTitle heading={"About me"}></SharedTitle>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="mx-32 w-1/2">
          <div className="absolute ">
            <div className="relative -top-10">
              <img src={Img} alt="" className="w-72 h-72" />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            voluptatibus dolore ad laboriosam, rerum possimus neque vel? Vel,
            illum veritatis. Neque eum autem doloribus, ea nam fugiat modi quos
            ad exercitationem, voluptatum aperiam expedita iure et eius corporis
            ipsa inventore dicta aspernatur, enim reprehenderit. Maxime sed
            blanditiis iste hic assumenda dolorum asperiores, perspiciatis earum
            facilis voluptatum tempora alias placeat, reiciendis atque ducimus.
            A sit velit, ipsa, eveniet adipisci quos veniam iusto ut voluptas
            enim molestiae aliquid pariatur ab amet! Explicabo eius consequuntur
            ea temporibus, aspernatur soluta fugiat ipsa exercitationem
            laboriosam minus expedita, harum nulla molestiae facilis qui? Amet,
            magnam exercitationem?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
