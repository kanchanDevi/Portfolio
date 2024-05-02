
const Card = ({ id, name, desciption, link, image }) => {
  return (
    <>
      {/* <div className="projects-card"> */}
        <div className=" w-[420px] flex justify-center flex-col items-center shadow-md shadow-yellow-600/50 rounded-lg p-4 sm:w-[300px] h-[400px] mb-3">
        <div className="image-section">
            <img src={image} className=" h-[150px] w-[200px] " />
          </div>
          <div className="p-3 text-md text-white">
            <h3 className="text-center">{name}</h3>
            <p className="text-justify text-sm">{desciption}</p>       
          </div>
          <div>
          <button type="button" className="view-project-button">
              <a href={link}  target="_blank" className="decoration-none  text-lg leading-5 color-white bg-[#fcba03] rounded p-1 mr-2">Demo</a>
            </button>
            <button type="button" className="view-project-button">
              <a href={link}  target="_blank" className="decoration-none  text-lg leading-5 color-white bg-[#fcba03] rounded p-1 mr-2">GitHub</a>
            </button>
          </div>

          
        </div>
      {/* </div> */}
    </>
  );
};
export default Card;