import {
   faBars,
   faCartShopping,
   faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/img/logo.png";
import { links } from "../data/data";

const Header = () => {
   const [isMenuShow, setIsMenuShow] = useState(false);
   const cartLength = useSelector((state) => state.cart.length);
   const headerElement = useRef(null);
   window.onscroll = () => {
      const ele = headerElement.current;
      window.scrollY > 80
         ? ele.classList.add("scroll-header")
         : ele.classList.remove("scroll-header");
   };
   return (
      <header className="header" ref={headerElement}>
         <nav className="nav container">
            <Link to="/" className="logo">
               <img src={logo} alt="logo" />
            </Link>
            <div className={`menu ${isMenuShow ? "show-menu" : ""}`}>
               <ul className="links">
                  {links.map((e, i) => (
                     <li
                        className="item"
                        key={i}
                        onClick={(_) => setIsMenuShow(false)}
                     >
                        {e.path !== "/#shop" ? (
                           <Link to={e.path} className="link">
                              <FontAwesomeIcon icon={e.icon} />
                              {e.title}
                           </Link>
                        ) : (
                           <HashLink to={e.path} className="link">
                              <FontAwesomeIcon icon={e.icon} />
                              {e.title}
                           </HashLink>
                        )}
                     </li>
                  ))}
               </ul>
               <div className="close" onClick={(_) => setIsMenuShow(false)}>
                  <FontAwesomeIcon icon={faXmark} />
               </div>
            </div>
            <div className="menu-buttons">
               <div className="cart">
                  <Link to="/cart">
                     <FontAwesomeIcon icon={faCartShopping} />
                     {cartLength ? (
                        <span className="circle">{cartLength}</span>
                     ) : null}
                  </Link>
               </div>

               <FontAwesomeIcon
                  icon={faBars}
                  className="ri-align-right menu-toggle"
                  onClick={(_) => setIsMenuShow(true)}
               />
            </div>
         </nav>
      </header>
   );
};

export default Header;
