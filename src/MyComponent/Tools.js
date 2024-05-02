import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiAdobephotoshop,
    SiCanva,
  } from "react-icons/si";
  
  function Tools() {
    return (
      <div style={{ display:"flex" , flexWrap:"wrap",justifyContent: "center", paddingBottom: "50px" }}>
        <div className="tech-icons">
          <SiCanva />
        </div>
        <div className="tech-icons">
          <SiVisualstudiocode />
        </div>
        <div className="tech-icons">
          <SiPostman />
        </div>
        <div  className="tech-icons">
          <SiSlack />
        </div>
        <div  className="tech-icons">
          <SiAdobephotoshop />
        </div>

        
      </div>
    );
  }
  
  export default Tools;