import Tools from "../Tools";
import Skills from "./Skills";
import { ImPointRight } from "react-icons/im";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Contact from "./Contact";

const About = () => {
  return (
    <>
      <div className=" p-10 text-justify lg:flex flex-col  justify-center text-white lg:p-28">
        <h2 className="text-center text-2xl">
          Know Who <span className="text-[#fcba03]"> I'M</span>
        </h2>
        <p className="text-lg pt-2 pb-3">
          I am Kanchan Devi from Chandigarh. I have completed M.A in Arts from
          Punjab University. Enthusiastic and motivated self-learning in
          Information Technology. Interested in exploring about Computer
          Network, Frontend Developer and Backend Development. Now I am looking
          for more experience in my field.
        </p>
       <div>
     
       </div>
        <p className="mb-2">
          Apart from coding, some other activities that I love to do!
        </p>

        <ul className="max-md:flex flex-col justify-center items-center">
          <li className="flex text-lg  lg:flex justify-start list-none  pl-[1px] ">
            <ImPointRight className="mr-2" />
            Reading
          </li>
          <li className="flex text-lg lg: flex justify-start list-none  pl-[1px] ">
            <ImPointRight className="mr-2" /> Sketching
          </li>
          <li className="flex text-lg lg:flex justify-start list-none  pl-[1px] ">
            <ImPointRight className="mr-2" />
            Travelling
          </li>
        </ul>

        <h1 className="text-lg text-center sm:text-center sm:text-3xl  p-3 font-bold">
          Professional <span className="text-[#fcba03]">Skillset</span>
        </h1>
        <Skills />

        <h1 className="text-center text-2xl  pt-3 font-bold">
          <span className="text-[#fcba03]">Tools</span> I Use
        </h1>

        <Tools />
        <Contact/>
      </div>
    </>
  );
};
export default About;
