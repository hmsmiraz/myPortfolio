import  { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uu3t7th",
        "template_fukge36",
        form.current,
        "DzBk5Ndc-hhuz4ByX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
      <div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row py-20">
            <div className="text-center  lg:text-left">
              <h1 className="text-xl lg:text-5xl font-bold">Contact With Me!</h1>
              <p className= "mx-auto py-6">
                Feel free to tell me about your plans  <br />  and events! Do not
                hesitate to  <br />  message me. I will contact with <br /> you soon,
                Inshallah.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full px-5 max-w-sm">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="user_name"
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="user_email"
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <input
                    name="message"
                    type="text"
                    placeholder="Your Message"
                    className="input input-bordered py-12"
                    required
                  />
                </div>
               <div className="text-center my-3 ">
               <input type="submit" value="Send" className="btn btn-primary text-white px-10" />
               </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;
