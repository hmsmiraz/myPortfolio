import SharedTitle from "../../Shared/SharedTitle";

const Education = () => {
  return (
    <div className="my-5">
      <div>
        <SharedTitle
          heading={"Education"}
          subHeading={"Charting the Evolution of My Academic Pathway"}
        ></SharedTitle>
      </div>
      <div className="mx-2">
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start timeline-box">
              <div className="text-lg font-black">
                Master of Science (M.Sc.) in CSE
              </div>
              <p>
                Port City International University.
                <br />
                Expected Graduation: July, 2024
                <br />
                Chattogram, Bangladesh.
              </p>
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              <div className="text-lg font-black">
                Bachelor of Science (B.Sc.) in CSE
              </div>
              <p>
                Port City International University.
                <br />
                Graduation: July, 2022
                <br />
                Chattogram, Bangladesh.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
