import NotFound from "../assets/img/NotFound.svg";

const PageNotFounded = () => {
   return (
      <main className="not-found-page">
         <section className="main-section">
            <div className="container">
               <img src={NotFound} className="cart-img" />
               <h2 className="not-found">Page Not Founded</h2>
            </div>
         </section>
      </main>
   );
};

export default PageNotFounded;
