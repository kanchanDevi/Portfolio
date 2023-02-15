import Projects from '../Projects/Projects';
import { Link } from "react-router-dom";
import './index.css';
import Pic from '../../../Public/assests/p-photo.png';

const About =()=>{
    const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch('https://in.docs.wps.com/module/common/loadPlatform/?sa=e1&st=0t&sid=sIEy2jsIrpdixnwY').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'https://in.docs.wps.com/module/common/loadPlatform/?sa=e1&st=0t&sid=sIEy2jsIrpdixnwY';
				alink.click();
			})
		})
	}
    return(
        <>
        <div className="details-container">
            <div className="name-details">
                <p className='role'>Frontend Developer</p>
                <h2 className='full-name'>Hello,  my name is Kanchan Devi</h2>
                <p className='details'>Enthusiastic and motivated self-learning in Information Technology. Interested in exploring about Computer Network, Frontend Developer and Backend Development. Now I am looking for more experience in my field.</p>
                <div className='buttons'>
                    <Link to="/assests/Resume.pdf" className='button-styles' target="_blank"><button type="button" className='project-button' onClick={onButtonClick}>Resume</button></Link>
                
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