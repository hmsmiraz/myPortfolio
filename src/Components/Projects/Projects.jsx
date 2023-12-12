import { useEffect, useState } from "react";
import SharedTitle from "../../Shared/SharedTitle";
import { Link } from "react-router-dom";

const Projects = () => {
  // const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   fetch("public/Projects.json")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => setProjects(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);
  const projects = [
    {
      "id": 1,
      "name": "AssetPulse",
      "image": "https://i.ibb.co/x87gdX8/asset.png",
      "type": "Asset Management System",
      "live_link": "https://assetpulse-511ac.web.app/",
      "client_code": "https://github.com/hmsmiraz/AssetPulse",
      "server_link": "https://github.com/hmsmiraz/AssetPulse-Server"
    },
    {
      "id": 2,
      "name": "Bytes of Thoughts",
      "image": "https://i.ibb.co/MNhNcTD/bot.png",
      "type": "A Blog website",
      "live_link": "https://bytes-of-thoughts.web.app/",
      "client_code": "https://github.com/hmsmiraz/Bytes_of_Thoughts_Client",
      "server_link": "https://github.com/hmsmiraz/Bytes_of_Thoughts_Server"
    },
    {
      "id": 3,
      "name": "Bistro Boss",
      "image": "https://i.ibb.co/Z1c2dR0/bistro.png",
      "type": "Restaurant Management System",
      "live_link": "https://bistro-boss-25724.web.app/",
      "client_code": "https://github.com/hmsmiraz/Bistro-Boss-Client",
      "server_link": "https://github.com/hmsmiraz/Bistro-Boss-Server"
    }
  ];
  return (
    <div className="my-5">
      <div>
        <SharedTitle
          heading={"Projects"}
          subHeading={"Things I’ve built so far"}
        ></SharedTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img src={project.image} alt="project" className="h-60" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.type}</p>
              <div className="card-actions flex justify-center ">
                <Link to={project.live_link}>
                  <button className="btn btn-primary text-white">Live Link</button>
                </Link>
                <Link to={project.client_code}>
                  <button className="btn btn-primary text-white">Client Code</button>
                </Link>
                <Link to={project.server_link}>
                  <button className="btn btn-primary text-white">Server Code</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
