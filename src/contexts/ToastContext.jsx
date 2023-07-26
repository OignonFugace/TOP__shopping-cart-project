import { createContext, useRef, useState } from "react";
import { UndoToast } from "../components";
import {
  ADD_TO_CART_TOAST,
  REMOVE_FROM_CART_TOAST,
  ADD_QUANTITY_TO_CART_TOAST,
  DELETE_CART_ITEM_TOAST,
  CLEAR_CART_TOAST,
} from "../utils/contants";

const ToastContext = createContext();

function ToastContextProvider({ children }) {
  const addToCartToast = useRef(null);
  const removeFromCartToast = useRef(null);
  const addQuantityToCartToast = useRef(null);
  const deleteCartItemToast = useRef(null);
  const clearCartToast = useRef(null);

  const [payload, setPayload] = useState(null);
  const [args, setArgs] = useState(null);

  function showToast(toast, nextPayload, nextArgs) {
    setPayload(nextPayload);
    setArgs(nextArgs);
    toast.current.show();
  }

  return (
    <ToastContext.Provider
      value={{
        addToCartToast,
        removeFromCartToast,
        addQuantityToCartToast,
        deleteCartItemToast, 
        clearCartToast,
        showToast,
      }}
    >
      {children}
      <UndoToast type={ADD_TO_CART_TOAST} payload={payload} />
      <UndoToast type={REMOVE_FROM_CART_TOAST} payload={payload} />
      <UndoToast type={ADD_QUANTITY_TO_CART_TOAST} payload={payload} args={args} />
      <UndoToast type={DELETE_CART_ITEM_TOAST} payload={payload} args={args} />
      <UndoToast type={CLEAR_CART_TOAST} args={args} />
    </ToastContext.Provider>
  );
}

export default ToastContext;
export { ToastContextProvider };
