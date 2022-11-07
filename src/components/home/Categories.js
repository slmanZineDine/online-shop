import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../data/data";
import { getByCategory } from "../../redux/slices/categoriesSlice";

const Categories = React.forwardRef(({ theRef }, ref) => {
   const [lShadow, setLShadow] = useState("none");
   const [rShadow, setRShadow] = useState("none");
   const dispatch = useDispatch();
   return (
      <div className="cover">
         <span className="before" style={{ display: `${lShadow}` }}></span>
         <span className="after" style={{ display: `${rShadow}` }}></span>
         <div
            className="categories"
            ref={ref}
            onScroll={(e) => {
               if (window.screen.availWidth <= 576) {
                  let ele = e.target;
                  ele.scrollLeft >= 310
                     ? setRShadow("none")
                     : setRShadow("inline");
                  ele.scrollLeft === 0
                     ? setLShadow("none")
                     : setLShadow("inline");
               }
            }}
         >
            {categories.map((ele, i) => (
               <div
                  className="box"
                  key={i}
                  onClick={(event) => {
                     dispatch(getByCategory(ele.title));
                     Array.from(theRef.current.children).forEach((e) =>
                        e.classList.remove("selected")
                     );
                     event.target.classList.add("selected");
                  }}
               >
                  <FontAwesomeIcon icon={ele.icon} />
                  <h4 className="category-name">{ele.title}</h4>
               </div>
            ))}
         </div>
      </div>
   );
});

export default Categories;
