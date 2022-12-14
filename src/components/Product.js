import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCartShopping,
   faStar as fasStar,
   faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Product = ({
   item,
   hasBtn,
   cartView,
   openProductView,
   showDescription,
}) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const checkStars = (product) => {
      const RATE = product.rating.rate;
      let starCount = Math.trunc(RATE);
      let stars = [];
      for (let i = 0; i < starCount; i++)
         stars.push(<FontAwesomeIcon icon={fasStar} key={i} />);
      if (+RATE % 1 > 0.4)
         stars.push(<FontAwesomeIcon icon={faStarHalfStroke} key={11} />);
      for (let i = 0; i < 5 - RATE.toFixed(0); i++)
         stars.push(<FontAwesomeIcon icon={farStar} key={i + 6} />);
      return stars;
   };
   return (
      <>
         <div
            className="product"
            onClick={(_) => {
               if (openProductView) navigate(`/products/${item.id}`);
            }}
         >
            <div className="image">
               <img src={item.image} alt={item.title} />
            </div>
            <div className="content">
               <h2 className="title">{item.title}</h2>
               {cartView ? (
                  <p className="category">Category: {item.category}</p>
               ) : (
                  <>
                     <div className="rating">
                        <div className="stars">{checkStars(item)}</div>
                        <div className="rate-num">
                           &#40;{item.rating.rate}&#41;
                        </div>
                     </div>
                     <div className="info">
                        <p className="price">${item.price}</p>
                        {showDescription ? (
                           <p className="description">{item.description}</p>
                        ) : null}
                        {hasBtn ? (
                           <button
                              className="add-btn"
                              onClick={(e) => {
                                 e.stopPropagation();
                                 dispatch(addToCart(item));
                                 swal("Added To Cart", {
                                    buttons: false,
                                    timer: 600,
                                    icon: "success",
                                 });
                              }}
                           >
                              <FontAwesomeIcon
                                 icon={faCartShopping}
                                 className="icon"
                              />
                              Add
                           </button>
                        ) : null}
                     </div>
                  </>
               )}
            </div>
         </div>
      </>
   );
};

export default Product;
