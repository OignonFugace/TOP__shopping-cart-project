import { createContext, useRef } from "react";
import { UndoToast } from "../components";
import { ADD_TO_CART_TOAST, REMOVE_FROM_CART_TOAST } from "../utils/contants";

const ToastContext = createContext();

function ToastContextProvider({ children }) {
  const addToCartToast = useRef(null);
  const removeFromCartToast = useRef(null);

  function showToast(toast) {
    console.log(toast);
    toast.current.show();
  }

  return (
    <ToastContext.Provider
      value={{
        addToCartToast,
        removeFromCartToast,
        showToast,
      }}
    >
      {children}
      <UndoToast type={ADD_TO_CART_TOAST}/>
      <UndoToast type={REMOVE_FROM_CART_TOAST}/>
    </ToastContext.Provider>
  );
}

export default ToastContext;
export { ToastContextProvider };
