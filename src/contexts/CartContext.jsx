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
        products: [
          ...state.products,
          { id: action.payload.id, quantity: action.payload.quantity },
        ],
      };
    }

    case REMOVE_PRODUCT_FROM_CART: {
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload.id),
      };
    }

    case CLEAR_CART: {
      return {
        ...state,
        products: [],
      };
    }

    case UPDATE_QUANTITY: {
      return {
        ...state,
        products: state.products.map((product) => {
          return product.id === action.payload.id
            ? {
                ...product,
                quantity: product.quantity + action.payload.operand,
              }
            : product;
        }),
      };
    }

    case LOAD_CART: {
      return {
        ...state,
        products: action.payload.products,
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
    products: [
      { id: 1, quantity: 1 },
      { id: 5, quantity: 1 },
    ],
    totalItems: 0,
    totalPrice: 0,
    orderStatus: "",
    promoCode: "",
  };

  const [localStorageState, setLocalStorageState] = useLocalStorage(
    "cartState",
    initialState
  );
  const [state, dispatch] = useReducer(
    cartReducer,
    localStorageState || initialState
  );

  useEffect(() => {
    setLocalStorageState(state);
  }, [state]);

  useEffect(() => {

  }, [state.products]);

  return (
    <CartContext.Provider value={{ dispatch, products: state.products }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
export { CartContextProvider };
