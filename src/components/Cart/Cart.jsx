import { useContext } from "react";
import CartContext from "../../contexts/CartContext";

function Cart() {
  const { productIdList } = useContext(CartContext);

  return <div></div>;
}

export default Cart;
