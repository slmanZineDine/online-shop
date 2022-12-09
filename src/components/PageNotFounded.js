import NotFound from "../assets/img/NotFound.svg";

const PageNotFounded = () => {
   return (
      <main className="not-found-page">
         <section className="main-section">
            <div className="container">
               <h2 className="not-found">Page Not Founded</h2>
               <img src={NotFound} className="cart-img" />
            </div>
         </section>
      </main>
   );
};

export default PageNotFounded;
