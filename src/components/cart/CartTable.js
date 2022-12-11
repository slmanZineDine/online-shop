import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../../redux/slices/cartSlice";
import Product from "../Product";
import swal from "sweetalert";

const CartTable = () => {
   const cart = useSelector((state) => state.cart);
   const dispatch = useDispatch();
   const checkDeletion = async (productId) => {
      let check = await swal("Are you sure?", {
         dangerMode: true,
         buttons: true,
      });
      if (check) dispatch(removeFromCart(productId));
   };
   return (
      <div className="cover">
         <table className="table">
            <thead className="thead">
               <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th> </th>
               </tr>
            </thead>
            <tbody className="tbody">
               {cart.map((product) => (
                  <tr className="trow" key={product.id}>
                     <td>
                        <Product
                           item={product}
                           cartView={true}
                           openProductView={true}
                        />
                     </td>
                     <td>${product.price}</td>
                     <td className="quantity">
                        <input
                           type="number"
                           min="1"
                           max="999"
                           placeholder={product.quantity}
                           onChange={(e) => {
                              dispatch(
                                 updateQuantity({
                                    product: product,
                                    newValue: e.target.value,
                                 })
                              );
                           }}
                        />
                     </td>
                     <td>${(product.price * product.quantity).toFixed(2)}</td>
                     <td
                        className="icon"
                        onClick={(_) => {
                           checkDeletion(product.id);
                        }}
                     >
                        <FontAwesomeIcon icon={faTrashCan} />
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default CartTable;
