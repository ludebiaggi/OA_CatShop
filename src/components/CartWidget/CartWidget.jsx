import cart from "./assets/cart.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="CartWidget" style={{ textDecoration: "none" }}>
      <img className="CartImg" src={cart} alt="cart-widget" />
      <span className="TotalQuantity">{totalQuantity}</span>
    </Link>
  );
};

export default CartWidget;
