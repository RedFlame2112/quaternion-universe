import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer className="page-footer">
      <div>
        <span className="githubIcon" style={{padding : '10px'}}>
        <a href="https://github.com/RedFlame2112">
          {/* Github */}
          <FontAwesomeIcon
            className='hoverable'
            icon={["fab", "square-github"]}
            size='3x'
            color="black"
            />
        </a>
        </span>    
        <span className="linkedinIcon" style={{padding : '10px'}} >
        <a href="https://www.linkedin.com/in/sagnik-chakraborty-373218239/">
          {/* LinkedIn */}
          <FontAwesomeIcon
            className='hoverable'
            icon={["fab", "linkedin"]}
            size='3x'
            color="black"
            /> 
        </a>
        </span> 
        <span className="mailIcon" style={{padding : '10px'}}>
        <a href="mailto:firebender2021@gmail.com">
          {/* Mail */}
          <FontAwesomeIcon
            className='hoverable'
            icon="envelope-square"
            size='3x'
            color="black"
            />
        </a>
        </span> 
      </div>
    </footer>
  );
};
export default Footer;
