import {
   faFacebook,
   faInstagram,
   faTwitter,
   faWhatsapp,
   faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
   faHeart,
   faLocationDot,
   faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import googlePlay from "../assets/img/google-play.png";

const Footer = () => {
   const theDate = new Date();
   return (
      <footer className="footer">
         <div className="container">
            <div className="footer-list">
               <div className="connection">
                  <h2 className="title">Shop Online</h2>
                  <div className="social">
                     <a href="http://www.facebook.com" className="link">
                        <FontAwesomeIcon icon={faFacebook} />
                     </a>
                     <a href="http://www.twitter.com" className="link">
                        <FontAwesomeIcon icon={faTwitter} />
                     </a>
                     <a href="http://www.instgram.com" className="link">
                        <FontAwesomeIcon icon={faInstagram} />
                     </a>
                     <a href="http://www.youtube.com" className="link">
                        <FontAwesomeIcon icon={faYoutube} />
                     </a>
                     <a href="http://www.whatsapp.com" className="link">
                        <FontAwesomeIcon icon={faWhatsapp} />
                     </a>
                  </div>
                  <p className="text">
                     <span className="icon">
                        <FontAwesomeIcon icon={faPhoneVolume} />
                     </span>
                     +7(684)555-0102
                  </p>
                  <p className="text">
                     <span className="icon">
                        <FontAwesomeIcon icon={faLocationDot} />
                     </span>
                     6391 Elgin St. Santa Ana, llinois 85486
                  </p>
                  <p className="text">
                     <span className="icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                     </span>
                     example@gmail.com
                  </p>
                  <p className="text">
                     <span className="icon">
                        <FontAwesomeIcon icon={faClock} />
                     </span>
                     10:00 - 18:00, Mon - Sat
                  </p>
               </div>
               <div className="content">
                  <div className="box">
                     <h2 className="title">Company</h2>
                     <p className="text">About Us</p>
                     <p className="text">Service</p>
                     <p className="text">Case Studies</p>
                     <p className="text">Blog</p>
                     <p className="text">Contact</p>
                  </div>
                  <div className="box">
                     <h2 className="title">Account</h2>
                     <p className="text">Sign In</p>
                     <p className="text">View Cart</p>
                     <p className="text">My Wishlist</p>
                     <p className="text">Track My Order</p>
                     <p className="text">Compare products</p>
                  </div>
                  <div className="box">
                     <h2 className="title">Download</h2>
                     <div className="image">
                        <a href="">
                           <img src={googlePlay} alt="google-play" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="website-info">
               <div className="copyright">
                  Copyright © {theDate.getFullYear()}{" "}
                  <a href="" className="link sub-text">
                     Slman Zinedine
                  </a>
                  .All Right Reserved
               </div>
               <div className="made-with">
                  <p>
                     Made with{" "}
                     <span className="icon-heart">
                        <FontAwesomeIcon icon={faHeart} />
                     </span>{" "}
                     By{" "}
                     <a href="" className="link sub-text">
                        Slman Zinedine
                     </a>
                  </p>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
