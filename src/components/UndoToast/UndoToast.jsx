import { useContext, useEffect, useState } from "react";
import { Toast, Text, Button } from "@ui5/webcomponents-react";
import {
  ADD_PRODUCT_TO_CART,
  ADD_TO_CART_TOAST,
  REMOVE_FROM_CART_TOAST,
  REMOVE_PRODUCT_FROM_CART,
  ADD_QUANTITY_TO_CART_TOAST,
  UPDATE_QUANTITY,
  DELETE_CART_ITEM_TOAST,
  CLEAR_CART_TOAST,
} from "../../utils/contants";
import ToastContext from "../../contexts/ToastContext";
import CartContext from "../../contexts/CartContext";
import "@ui5/webcomponents-icons/dist/undo.js";

function UndoToast({ type, payload, args }) {
  const {
    addToCartToast,
    removeFromCartToast,
    addQuantityToCartToast,
    deleteCartItemToast,
    clearCartToast,
  } = useContext(ToastContext);
  const { dispatch } = useContext(CartContext);
  const [buttonDisable, setButtonDisable] = useState(false);

  useEffect(() => {
    setButtonDisable(false);
  }, [type, payload, args]);

  switch (type) {
    case ADD_TO_CART_TOAST: {
      return (
        <Toast ref={addToCartToast} duration={3000} placement="BottomCenter">
          <div className="cart-toast add-to-cart-toast">
            <Text>Item successfully added to your cart!</Text>
            <Button
              onClick={() => {
                dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: payload });
                setButtonDisable(true);
              }}
              disabled={buttonDisable}
              design="Attention"
              icon="undo"
            >
              Cancel
            </Button>
          </div>
        </Toast>
      );
    }

    case REMOVE_FROM_CART_TOAST: {
      const toastQuantity = payload?.quantity;

      return (
        <Toast
          ref={removeFromCartToast}
          duration={3000}
          placement="BottomCenter"
        >
          <div className="cart-toast remove-from-cart-toast">
            <Text>
              {toastQuantity === 1
                ? "Item successfully removed from your cart!"
                : `Successfully removed ${toastQuantity} ${
                    toastQuantity === 1 ? "item" : "items"
                  } from your cart!`}
            </Text>
            <Button
              onClick={() => {
								console.log(toastQuantity);
								console.log("eh oh !");
                dispatch({ type: ADD_PRODUCT_TO_CART, payload: payload });
                setButtonDisable(true);
              }}
              disabled={buttonDisable}
              design="Attention"
              icon="undo"
            >
              Cancel
            </Button>
          </div>
        </Toast>
      );
    }

    case ADD_QUANTITY_TO_CART_TOAST: {
      const toastQuantity = args?.toastQuantity;

      return (
        <Toast
          ref={addQuantityToCartToast}
          duration={3000}
          placement="BottomCenter"
        >
          <div className="cart-toast remove-from-cart-toast">
            <Text>
              {" "}
              Successfully added {toastQuantity}{" "}
              {toastQuantity === 1 ? "item" : "items"} to your cart!
            </Text>
            <Button
              onClick={() => {
                if (args?.toBeRemoved) {
                  dispatch({
                    type: REMOVE_PRODUCT_FROM_CART,
                    payload: payload,
                  });
                } else {
                  dispatch({ type: UPDATE_QUANTITY, payload: payload });
                }
                setButtonDisable(true);
              }}
              disabled={buttonDisable}
              design="Attention"
              icon="undo"
            >
              Cancel
            </Button>
          </div>
        </Toast>
      );
    }

    case DELETE_CART_ITEM_TOAST: {
      const toastQuantity = args?.toastQuantity;

      return (
        <Toast
          ref={deleteCartItemToast}
          duration={3000}
          placement="BottomCenter"
        >
          <div className="cart-toast add-to-cart-toast">
            <Text>
              Successfully removed {toastQuantity}{" "}
              {toastQuantity === 1 ? "item" : "items"} from your cart!
            </Text>
            <Button
              onClick={() => {
                dispatch({ type: ADD_PRODUCT_TO_CART, payload: payload });
                setButtonDisable(true);
              }}
              disabled={buttonDisable}
              design="Attention"
              icon="undo"
            >
              Cancel
            </Button>
          </div>
        </Toast>
      );
    }

    case CLEAR_CART_TOAST: {
      return (
        <Toast ref={clearCartToast} duration={3000} placement="BottomCenter">
          <div className="cart-toast add-to-cart-toast">
            <Text>Cart cleared! All items have been removed.</Text>
            <Button
              onClick={() => {
                args.forEach((product) => {
                  dispatch({
                    type: ADD_PRODUCT_TO_CART,
                    payload: { id: product.id, quantity: product.quantity },
                  });
                });
                setButtonDisable(true);
              }}
              disabled={buttonDisable}
              design="Attention"
              icon="undo"
            >
              Cancel
            </Button>
          </div>
        </Toast>
      );
    }

    default:
      break;
  }
}

export default UndoToast;
