import {
   faFacebook,
   faInstagram,
   faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Employee = ({ employee }) => {
   return (
      <div className="box">
         <img src={employee.image} alt={employee.name} />
         <div className="info">
            <h3 className="name">{employee.name}</h3>
            <p className="job-title">{employee["job-title"]}</p>
            <div className="social">
               <a href="http://www.facebook.com" className="link">
                  <FontAwesomeIcon icon={faFacebook} />
               </a>
               <a href="http://www.linkedin.com" className="link">
                  <FontAwesomeIcon icon={faLinkedin} />
               </a>
               <a href="http://www.instgram.com" className="link">
                  <FontAwesomeIcon icon={faInstagram} />
               </a>
            </div>
         </div>
      </div>
   );
};

export default Employee;
