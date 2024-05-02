import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {

  SiMysql,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiAngular 

} from "react-icons/si";


function Skills() {
    return (
        <div style={{ display:"flex" , flexWrap:"wrap", justifyContent: "center", paddingBottom: "50px" }}>
          
          <div  className="tech-icons">
            <DiJavascript1 />
          </div>
          
          <div className="tech-icons">
            <DiNodejs />
          </div>
          <div  className="tech-icons">
            <DiReact />
          </div>
         
          <div className="tech-icons">
            <DiMongodb />
          </div>
          
          <div className="tech-icons">
            <DiGit />
          </div>
          <div className="tech-icons">
            <SiCss3 />
          </div>
          <div className="tech-icons">
            <SiTailwindcss />
          </div>
          <div className="tech-icons">
            <SiRedux />
          </div>
          <div className="tech-icons">
            <SiAngular />
          </div>
          <div className="tech-icons">
          <SiMysql />
          </div>
          <div  className="tech-icons">
            <DiPython />
          </div>
          <div className="tech-icons">
            <DiJava />
          </div>
        </div>
      );
}

export default Skills;