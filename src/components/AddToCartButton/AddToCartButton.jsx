import { Button, Toast } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/cart-4.js";
import { useContext, useRef, useState } from "react";
import CartContext from "../../contexts/CartContext";
import { useParams } from "react-router-dom";
import { ADD_PRODUCT_TO_CART, UPDATE_QUANTITY } from "../../utils/contants";

function AddToCartButton({ quantity }) {
  const { dispatch, products: cartProducts } = useContext(CartContext);
  const { id: idString } = useParams();
  const toastRef = useRef(null);
	const [toastQuantity, setToastQuantity] = useState(quantity);

  const id = Number(idString);
  const product = cartProducts.find((product) => product.id === id);

  function showToast(toast) {
    toast.current.show();
  }

  return (
    <>
      <Button
        icon="cart-4"
        onClick={() => {
					setToastQuantity(quantity);
          if (product) {
            dispatch({
              type: UPDATE_QUANTITY,
              payload: { id: id, operand: quantity },
            });
          } else {
            dispatch({
              type: ADD_PRODUCT_TO_CART,
              payload: { id: id, quantity: quantity },
            });
          }
          showToast(toastRef);
        }}
      >
        Add To Cart
      </Button>
      <Toast ref={toastRef} duration={3000} placement="BottomStart">
        Successfully added {toastQuantity} {toastQuantity === 1 ? "item" : "items"} to
        your cart!
      </Toast>
    </>
  );
}

export default AddToCartButton;
