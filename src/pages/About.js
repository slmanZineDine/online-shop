import Intro from "../components/Intro";
import product from "../assets/img/product.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { services, stats } from "../data/data";
import { useState } from "react";
import { useRef } from "react";

const About = () => {
   // const statsEle = useRef(null);
   // const [started, setStarted] = useState(false);
   // console.log(statsEle.current.offsetTop);
   // console.log(statsEle.current.offsetWidth);
   // const [numbers, setNumbers] = useState([0, 0, 0, 0]);
   // window.onscroll = () => {
   // console.log(window.scrollY);
   // console.log(statsEle.current.offsetTop);
   // if (window.scrollY >= statsEle.current.offsetTop) {
   //    if (!started) {
   //       numbers.forEach((e, i) => {
   //          const goal = setInterval(() => {
   //             let newArr = [];
   //             console.log("one");
   //             setNumbers((p) => {
   //                console.log("two");
   //                newArr = [...p];
   //                newArr[i] += 1;
   //                return newArr;
   //             });
   //             console.log("three");
   // console.log(numbers[i] === stats[i].number);
   // console.log(newArr[i]);
   // console.log(stats[i].number);
   //                if (numbers[i] === stats[i].number) clearInterval(goal);
   //             }, 2000);
   //          });
   //       }
   //       setStarted(true);
   //    }
   // };
   // console.log("Render");
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
         {/* <section className="section stats" ref={statsEle}>
            <div className="container">
               {stats.map((e, i) => (
                  <div className="box" key={i}>
                     <div className="number">{numbers[i]}k</div>
                     <div className="title">{e.title}</div>
                  </div>
               ))}
            </div>
         </section> */}
      </main>
   );
};

export default About;
