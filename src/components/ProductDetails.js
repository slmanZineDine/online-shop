import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../redux/slices/productIdSlice";
import Product from "./Product";

const ProductDetails = () => {
   const { productId } = useParams();
   const dispatch = useDispatch();
   const product = useSelector((store) => store.byId);
   useEffect((_) => {
      dispatch(getById(productId));
   }, []);
   return (
      <main className="product-details-page">
         <section className="main-section">
            <div className="container">
               {Object.keys(product).length > 0 ? (
                  <Product
                     item={product}
                     hasBtn={true}
                     openProductView={false}
                     showDescription={true}
                  />
               ) : (
                  <h2>please wait</h2>
               )}
            </div>
         </section>
      </main>
   );
};

export default ProductDetails;
