import Card from "./Card";
import { ProjectDetails } from "./../../Constant";
import Contact from "./Contact";

const Projects = () => {
  return (
    <>
      <h3 className="max-md:ml-0 font-bold text-2xl leading-[72px] text-center text-white ml-10">
        My Projects
      </h3>
      <div className="sm:grid grid-cols-2 gap-6 lg:grid lg:grid-cols-3 lg:gap-4 justify-items-center items-center p-5 m-5">
        {ProjectDetails.map((project, index) => {
          return (
            <>
              <div key={index} className="w-100">
                <Card {...project} />
              </div>
            </>
          );
        })}
      </div>
      <Contact/>
    </>
  );
};
export default Projects;
