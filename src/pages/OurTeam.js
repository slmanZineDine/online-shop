import Employee from "../components/Employee";
import Intro from "../components/Intro";
import employees from "../data/employees";

const OurTeam = () => {
   return (
      <main className="our-team-page">
         <Intro
            introImg={employees[0].image}
            introTitle={"Best Employee of"}
            introSubTitle={"the Month"}
         />
         <section className="section our-team">
            <div className="container">
               <h2 className="section-title">
                  Our <span className="sub-text">Team</span>
               </h2>
               <p className="text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dicta quos temporibus blanditiis praesentium.
               </p>
               <div className="user-list">
                  {employees.map((employee) => (
                     <Employee employee={employee} key={employee.id} />
                  ))}
               </div>
            </div>
         </section>
      </main>
   );
};

export default OurTeam;
