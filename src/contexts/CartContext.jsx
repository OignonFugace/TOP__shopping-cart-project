import { createContext, useEffect, useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  CLEAR_CART,
  UPDATE_QUANTITY,
  LOAD_CART,
  CHECKOUT,
} from "../utils/contants";

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      return {
        ...state,
      };
    }

    case REMOVE_PRODUCT_FROM_CART: {
      return {
        ...state,
      };
    }

    case CLEAR_CART: {
      return {
        ...state,
      };
    }

    case UPDATE_QUANTITY: {
      return {
        ...state,
      };
    }

    case LOAD_CART: {
      return {
        ...state,
				productIdList: action.payload.productList,
				totalItems: action.payload.totalItems,
				totalPrice: action.payload.totalPrice,
				orderStatus: action.payload.orderStatus,
				promoCode: action.payload.promoCode,
      };
    }

    case CHECKOUT: {
      return {
        ...state,
      };
    }

    default:
      throw new Error("Invalid action type: " + action.type);
  }
}

function CartContextProvider({ children }) {
  const initialState = {
    productIdList: ["foo", "bar"],
    totalItems: 0,
    totalPrice: 0,
    orderStatus: "",
    promoCode: "",
  };

  const [localStorageState, setLocalStorageState] = useLocalStorage(
    "cartState",
    initialState
  );
  const [state, dispatch] = useReducer(cartReducer, localStorageState || initialState);

  useEffect(() => {
		setLocalStorageState(state);
  }, [state]);

  return (
    <CartContext.Provider value={{ dispatch, productIdList: state.productIdList }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
export { CartContextProvider };
