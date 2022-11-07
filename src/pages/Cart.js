import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
   faArrowLeftLong,
   faCartShopping,
   faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import emptyCart from "../assets/img/emptyCart.svg";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../redux/slices/cartSlice";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import CartTable from "../components/cart/CartTable";
import swal from "sweetalert";

const Cart = () => {
   const cart = useSelector((state) => state.cart);
   const dispatch = useDispatch();
   const [discount, setDiscount] = useState(0);
   const [coupon, setCoupon] = useState("");
   const productsInfo = {
      subtotal() {
         const calc = cart.reduce((t, c) => t + c.price * c.quantity, 0);
         return +calc.toFixed(2);
      },
      total() {
         const tot = this.subtotal() + this.shipping + this.tax - discount;
         return +tot.toFixed(2);
      },
      shipping: 5,
      tax: 5,
   };
   const [checkout, setCheckout] = useState(false);
   const checkClear = async () => {
      let check = await swal("Are you sure?", {
         dangerMode: true,
         buttons: true,
      });
      if (check) dispatch(clear());
   };
   return (
      <main className="cart-page">
         <section className="main-section">
            <div className="container">
               {cart.length !== 0 ? (
                  <>
                     <div className="full">
                        <div className="text-content">
                           <h1 className="section-title">Shopping Cart</h1>
                           <p className="text">
                              There are {""}
                              <span className="sub-text">
                                 {cart.length} products
                              </span>{" "}
                              in your cart
                           </p>
                        </div>
                        <div className="product-content">
                           <div className="product-table">
                              <CartTable />
                              <div className="control-buttons">
                                 <Link to="/" className="continue-btn btn">
                                    <FontAwesomeIcon
                                       icon={faArrowLeftLong}
                                       className="icon"
                                    />
                                    Continue Shopping
                                 </Link>
                                 <button
                                    className="clear-btn btn"
                                    onClick={(_) => checkClear()}
                                 >
                                    <FontAwesomeIcon
                                       icon={faRetweet}
                                       className="icon"
                                    />
                                    Clear
                                 </button>
                                 {/* <button className="update-btn btn">
                                 <FontAwesomeIcon icon={faRetweet} />
                                 Update Cart
                              </button> */}
                              </div>
                           </div>
                           <div className="products-info">
                              <p>
                                 Subtotal :{" "}
                                 <span className="coins">
                                    ${productsInfo.subtotal()}
                                 </span>
                              </p>
                              <p>
                                 Discount :{" "}
                                 <span className="coins">${discount}</span>
                              </p>
                              <p>
                                 Shipping :{" "}
                                 <span className="coins">
                                    ${productsInfo.shipping}
                                 </span>
                              </p>
                              <p>
                                 Estimated Tax :{" "}
                                 <span className="coins">
                                    ${productsInfo.tax}
                                 </span>
                              </p>
                              <p>
                                 Total :{" "}
                                 <span className="total-price">
                                    ${productsInfo.total()}
                                 </span>
                              </p>
                              <button
                                 className="checkout-btn btn"
                                 onClick={(_) => {
                                    setCheckout(true);
                                    dispatch(clear());
                                 }}
                              >
                                 <FontAwesomeIcon
                                    icon={faCartShopping}
                                    className="icon"
                                 />
                                 Checkout
                              </button>
                           </div>
                        </div>
                     </div>
                     <div className="extra-details">
                        <div className="shipping">
                           <h2 className="title">Calculate Shipping</h2>
                           <select name="" id="" className="country">
                              <option value="Select Country">
                                 Select Country
                              </option>
                           </select>
                           <div className="inputs">
                              <input
                                 type="text"
                                 className="state"
                                 placeholder="State / Country"
                              />
                              <input
                                 type="number"
                                 className="zip-code"
                                 placeholder="Post Code / Zip"
                              />
                           </div>
                        </div>
                        <div className="coupon">
                           <h2 className="title">Apply Coupon</h2>
                           <input
                              type="text"
                              className="coupon-number"
                              placeholder="Enter coupon (Write slman to get discount)"
                              onChange={(e) => setCoupon(e.target.value)}
                           />
                           {coupon ? (
                              <p className="coupon-code">
                                 * Your Coupon code is{" "}
                                 <span className="sub-text">{coupon}</span>
                              </p>
                           ) : null}
                           <button
                              className="apply-btn btn"
                              onClick={(_) => {
                                 coupon === "slman"
                                    ? setDiscount(12)
                                    : setDiscount(0);
                              }}
                           >
                              Apply
                           </button>
                        </div>
                     </div>
                  </>
               ) : (
                  <div className="content">
                     <img src={emptyCart} className="cart-img" />
                     {checkout ? (
                        <div className="completed">
                           <h1 className="section-title">
                              Your Order Is{" "}
                              <span className="sub-text">Completed</span>
                           </h1>
                           <p className="text">
                              Thank you for your order, our manager will contact
                              you in couple of minutes.
                           </p>
                        </div>
                     ) : (
                        <div className="empty">
                           <h1 className="section-title">
                              Shopping Cart Is{" "}
                              <span className="sub-text">Empty</span>
                           </h1>
                           <p className="text">
                              Go to shop and add to cart products you'd like to
                              buy.
                           </p>
                        </div>
                     )}
                     <HashLink smooth to="/#shop" className="btn">
                        <FontAwesomeIcon
                           icon={faArrowLeftLong}
                           className="icon"
                        />{" "}
                        Return to shop
                     </HashLink>
                  </div>
               )}
            </div>
         </section>
      </main>
   );
};

export default Cart;
