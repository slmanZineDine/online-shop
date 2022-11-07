import React from "react";
import landingPage from "../../assets/img/landingPage.png";
const Hero = () => {
   return (
      <div className="hero main-section">
         <div className="container">
            <div className="content">
               <div className="info">
                  <h2 className="title">
                     Online Store Of{" "}
                     <span className="sub-text">Products With Delivery</span>
                  </h2>
                  <p className="text">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aspernatur, nulla. Itaque eum, pariatur labore amet sed
                     voluptates totam animi error aliquid minima quis eveniet,
                     perspiciatis, modi odio consequatur repellendus laudantium!
                  </p>
               </div>
               <div className="img">
                  <img src={landingPage} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
