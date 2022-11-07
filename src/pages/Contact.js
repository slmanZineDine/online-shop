import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
   faLocationDot,
   faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
   return (
      <main className="contact-page">
         <section className="main-section helped-info">
            <div className="container">
               <h2 className="section-title">
                  Let us know <br />
                  <span className="sub-text">how we can help you</span>
               </h2>
               <div className="info-list">
                  <div className="box">
                     <span className="number">01.</span>
                     <h3 className="title">Visit Feedback</h3>
                     <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo quos deserunt alias consequatur labore quod
                        placeat.
                     </p>
                  </div>
                  <div className="box">
                     <span className="number">02.</span>
                     <h3 className="title">Employer Services</h3>
                     <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo quos deserunt alias consequatur labore quod
                        placeat.
                     </p>
                  </div>
                  <div className="box">
                     <span className="number">03.</span>
                     <h3 className="title">Billing Inquiries</h3>
                     <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo quos deserunt alias consequatur labore quod
                        placeat.
                     </p>
                  </div>
               </div>
            </div>
         </section>
         <section className="section contact-info">
            <div className="container">
               <div className="contact-info__list">
                  <div className="box">
                     <h2 className="title">Office</h2>
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
                        2972 Westheimer Rd. Santa Ana, llinois 85486
                     </p>
                     <p className="text">
                        <span className="icon">
                           <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        example@gmail.com
                     </p>
                  </div>
                  <div className="box">
                     <h2 className="title">Studio</h2>
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
                        2972 Westheimer Rd. Santa Ana, llinois 85486
                     </p>
                     <p className="text">
                        <span className="icon">
                           <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        example@gmail.com
                     </p>
                  </div>
                  <div className="box">
                     <h2 className="title">Shop</h2>
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
                        2972 Westheimer Rd. Santa Ana, llinois 85486
                     </p>
                     <p className="text">
                        <span className="icon">
                           <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        example@gmail.com
                     </p>
                  </div>
               </div>
            </div>
         </section>
         <section className="section comment-form">
            <div className="container">
               <h2 className="section-title">Drop Us a Line</h2>
               <p className="text">
                  Your email address will not be published. Required fields are
                  marked
               </p>
               <form action="" className="form">
                  <input type="text" name="name" placeholder="Name" />
                  <input type="number" name="phone" placeholder="Phone" />
                  <input type="email" name="email" placeholder="E-mail" />
                  <textarea
                     name="comment"
                     placeholder="Write your comment"
                  ></textarea>
                  <div className="save-info">
                     <input type="checkbox" name="save" id="save" />
                     <label htmlFor="save">
                        Save my name, email, and website in this browser
                     </label>
                  </div>
                  <input
                     type="submit"
                     value="Send message"
                     className="submit-btn btn"
                  />
               </form>
            </div>
         </section>
      </main>
   );
};

export default Contact;
