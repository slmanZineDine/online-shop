import { useSelector } from "react-redux";
import Product from "../Product";

const Popular = () => {
   const products = useSelector((store) => store.products);
   const topSelling = products.filter((e) => e.rating.count > 400);
   const TrendingProducts = products.filter((e) => e.rating.rate > 4);
   topSelling.length = 3;
   TrendingProducts.length = 3;
   return (
      <section className="popular section" id="popular">
         <div className="container">
            <div className="top-selling">
               <h2 className="section-title">
                  Top <span className="sub-text">Selling</span>
               </h2>
               <div className="box">
                  {topSelling.map((e) => (
                     <Product item={e} key={e.id} />
                  ))}
               </div>
            </div>
            <div className="trending-products">
               <h2 className="section-title">
                  Trending <span className="sub-text">Products</span>
               </h2>
               <div className="box">
                  {TrendingProducts.map((e) => (
                     <Product item={e} key={e.id} hasBtn={false} />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Popular;
