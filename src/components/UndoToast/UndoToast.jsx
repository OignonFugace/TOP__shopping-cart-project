import { useContext } from "react";
import { Toast, Text, Button } from "@ui5/webcomponents-react";
import {
  ADD_TO_CART_TOAST,
  REMOVE_FROM_CART_TOAST,
} from "../../utils/contants";
import ToastContext from "../../contexts/ToastContext";

function UndoToast({ type, payload }) {
	const { addToCartToast, removeFromCartToast } = useContext(ToastContext);

  switch (type) {
    case ADD_TO_CART_TOAST: {
      return (
        <Toast ref={addToCartToast} duration={3000} placement="BottomCenter">
          <div className="cart-toast add-to-cart-toast">
            <Text>Item successfully added to your cart!</Text>
            <Button design="Attention" icon="undo">
              Cancel
            </Button>
          </div>
        </Toast>
      );
    }

    case REMOVE_FROM_CART_TOAST: {
      return (
        <Toast
          ref={removeFromCartToast}
          duration={3000}
          placement="BottomCenter"
        >
          <div className="cart-toast remove-from-cart-toast">
            <Text>Item successfully removed from your cart!</Text>
            <Button design="Attention" icon="undo">
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
