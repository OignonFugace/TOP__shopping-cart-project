import { Button } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/cart-4.js";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import { useParams } from "react-router-dom";
import { ADD_PRODUCT_TO_CART, UPDATE_QUANTITY } from "../../utils/contants";

function AddToCartButton({ quantity }) {
  const { dispatch, products: cartProducts } = useContext(CartContext);
  const { id: idString } = useParams();

	const id = Number(idString);
	const product = cartProducts.find(product => product.id === id)

  return (
    <Button
      icon="cart-4"
      onClick={() => {
        if (product) {
          dispatch({
            type: UPDATE_QUANTITY,
            payload: { id: id, operand: quantity },
          });
          return;
        }
        dispatch({
          type: ADD_PRODUCT_TO_CART,
          payload: { id: id, quantity: quantity },
        });
      }}
    >
      Add To Cart
    </Button>
  );
}

export default AddToCartButton;
