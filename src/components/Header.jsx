import { useContext } from "react";
import Button from "../UI/Button";
import logo from "../assets/logo.jpg";
import CartContext from "../store/CartContext";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.cartItems.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="A restaurant" />
        <h1>Dream Food</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
