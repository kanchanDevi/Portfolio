import Projects from '../Projects/Projects';
import { Link } from "react-router-dom";
import './index.css';
import Pic from '../../../Public/assests/p-photo.png';
// import pdf from '../../../Public/assests/Resume.pdf';

const About =()=>{
   
    return(
        <>
        <div className="details-container">
            <div className="name-details">
                <p className='role'>Frontend Developer</p>
                <h2 className='full-name'>Hello,  my name is Kanchan Devi</h2>
                <p className='details'>Enthusiastic and motivated self-learning in Information Technology. Interested in exploring about Computer Network, Frontend Developer and Backend Development. Now I am looking for more experience in my field.</p>
                <div className='buttons'>
    <button className="project-button" ><a href="https://drive.google.com/file/d/15AafizRF2vlLK0sVlpEyw5HH2j5Ih5QN/view?usp=sharing" className='button-styles' target="_blank">Resume</a></button>
                </div>

            </div>
            <div className="image-details">
                <div className='card'><img src={Pic} className='profile-image' /></div>
                

            </div>
        </div>
       
        </>
    )
}
export default About