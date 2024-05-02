import AutoType from "./AutoType";
import Pic from "./../../assets/kanchan.png";
import Contact from "./Contact";
import resumeLink from './../../assets/kanchan.pdf'


const handleButtonClick = () => {
  window.open(resumeLink, "_blank");

}
const Home = () => {
  return (
    <>
      <section className="pt-8 text-center md:flex flex-row justify-around items-center  mx-xl:p-0 ">
        <div className=" flex flex-col justify-start ">
          <h2 className="text-white  text-4xl font-medium ">
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h2>
          <p className="col text-3xl text-white ">
            I'M <span className="font-bold text-[#fcba03]">KANCHAN DEVI</span>
          </p>
       
          <p className="pt-2 sm:pt-10 text-2xl font-semi-bold text-[#fcba03]">
            <AutoType />
          </p>
         
        </div>
        <div className="hidden sm:block">
          <div className="flex flex-col items-center h-[274px]  md:w-[340px] h-[400px] ]">
            <img src={Pic} alt="profile" className="rounded-full" />
          </div>
        </div>
      </section>
      <section className="bg-[#2b3638] pl-5 pr-5 md:pl-9 md:pr-9 lg:bg-[#2b3638] relative text-white flex flex-col justify-center items-center pt-28 pb-8 xl:p-0">
        <h2 className="sm:text-lg  md:text-3xl fon-medium mb-3 ">
          LET ME <span className="text-[#fcba03]">INTRODUCE MYSELF</span>
        </h2>
        <p className=" sm:text-md md:text-lg pb-5 ">
          I fell in love with programming and I have at least learnt something,
          I think… 🤷‍♂️
        </p>

        <p className="sm:text-lg md:text-lg pb-5">
          I am fluent in classics like C, Javascript and Python.
        </p>

        <p className=" sm:text-lg md:text-lg pb-5">
          My field of Interest's are building new Web Technologies and Products.
        </p>

        <p className="sm:text-lg md:text-lg pb-5">
          Whenever possible, I also apply my passion for developing products
          with Modern Javascript Library and Frameworks like React.js and
          Angular
        </p>
        <button className="bg-[#fcba03] h-10 w-28 text-white rounded" onClick={handleButtonClick}>
      View Resume
    </button>
   
     </section>
     
     <Contact/>
     

    </>
  );
};
export default Home;
