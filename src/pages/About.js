import Intro from "../components/Intro";
import product from "../assets/img/product.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { services, stats } from "../data/data";

const About = () => {
   return (
      <main className="about-page">
         <Intro
            introImg={product}
            introTitle={"Welcome To"}
            introSubTitle={"Shop Online"}
         />
         <section className="section services">
            <div className="container">
               <h2 className="section-title">
                  What We <span className="sub-text">Provide</span>?
               </h2>
               <div className="services-list">
                  {services.map((ser, i) => (
                     <div className="service" key={i}>
                        <FontAwesomeIcon icon={ser.icon} className="icon" />
                        <h3 className="title">{ser.title}</h3>
                        <p className="text">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Deleniti porro consequatur amet nulla maxime.
                        </p>
                        <button className="read-more-btn btn">Read more</button>
                     </div>
                  ))}
               </div>
            </div>
         </section>
         <section className="section stats">
            <div className="container">
               {stats.map((e, i) => (
                  <div className="box" key={i}>
                     <div className="number">{e.number}k</div>
                     <div className="title">{e.title}</div>
                  </div>
               ))}
            </div>
         </section>
      </main>
   );
};

export default About;
