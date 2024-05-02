import { FaInstagram, FaLinkedin, FaGithub,  FaEnvelope } from "react-icons/fa";


const Contact=()=>{
    return(
        <>
        <section>
      <div className="flex flex-col justify-center items-center  pt-10 pb-20 bg-[#2b3638]">
        <h2 className="text-4xl text-white font-bold ">Get In Touch</h2>
        <p className="text-md mt-3 mb-6 text-white">
          Feel free to <span className="text-[#fcba03]">connect</span> with me
        </p>
        <div className="flex flex-row">
          <div className="bg-white  rounded-full h-8 w-8  mr-3 flex justify-center items-center ">
            <a
              href="https://www.instagram.com/s.k_kanchan16/?next=%2F"
              target="_blank"
              className=" text-[#fcba03] text-xl"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="bg-white  rounded-full h-8 w-8 flex justify-center mr-3 items-center ">
            <a
              href="https://www.linkedin.com/in/kanchandevi/"
              target="_blank"
              className=" text-[#fcba03] text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="bg-white  rounded-full h-8 w-8 flex justify-center mr-3 items-center">
            <a
              href="https://github.com/kanchanDevi"
              target="_blank"
              className="text-[#fcba03]   text-xl"
            >
              {" "}
              <FaGithub />{" "}
            </a>
          </div>
          <div className="bg-white  rounded-full h-8 w-8 flex justify-center mr-3 items-center">
            <a
              href="mailto: kanchanthakurrkr@gmail.com"
              target="_blank"
              className="text-[#fcba03]   text-xl"
            >
              {" "}
              <FaEnvelope />
            </a>
          </div>

         
        </div>
      </div>
      </section>
        </>
    )
}

export default Contact