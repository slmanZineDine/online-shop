import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Categories from "./Categories";
import Product from "../Product";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/slices/productsSlice";

const Shop = () => {
   const categoriesRef = React.createRef();
   const products = useSelector((store) => store.products);
   const productsByCategories = useSelector((store) => store.category);
   const dispatch = useDispatch();
   useEffect((_) => {
      dispatch(getProducts());
   }, []);

   return (
      <section className="shop section" id="shop">
         <div className="container">
            <h2 className="section-title">
               Shop <span>by Categories</span>{" "}
            </h2>
            <div className="scroll-buttons">
               <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="left-arrow"
                  onClick={(_) => {
                     categoriesRef.current.scrollBy(-100, 0);
                  }}
               />
               <FontAwesomeIcon
                  icon={faArrowRight}
                  className="right-arrow"
                  onClick={(_) => {
                     categoriesRef.current.scrollBy(100, 0);
                  }}
               />
            </div>
            <Categories theRef={categoriesRef} ref={categoriesRef} />
            <div className="products-list">
               {productsByCategories.length
                  ? productsByCategories.map((e) => (
                       <Product
                          key={e.id}
                          item={e}
                          hasBtn={true}
                          openProductView={true}
                       />
                    ))
                  : products.map((e) => (
                       <Product
                          key={e.id}
                          item={e}
                          hasBtn={true}
                          openProductView={true}
                       />
                    ))}
            </div>
         </div>
      </section>
   );
};

export default Shop;
