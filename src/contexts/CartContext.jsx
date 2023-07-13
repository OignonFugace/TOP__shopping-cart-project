import { createContext, useEffect, useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useAllProducts from "../hooks/useAllProducts";

import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  CLEAR_CART,
  UPDATE_QUANTITY,
  LOAD_CART,
  CHECKOUT,
  UPDATE_TOTAL_ITEMS,
  UPDATE_TOTAL_PRICE,
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
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
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

    case UPDATE_TOTAL_ITEMS: {
      const totalItems = state.products.reduce(
        (acc, product) => acc + product.quantity,
        0
      );
      return {
        ...state,
        totalItems: totalItems,
      };
    }

    case UPDATE_TOTAL_PRICE: {
      const totalPrice = state.products.map(product => {
        const matchingProduct = action.payload.products.find(item => item.id === product.id);
        const productPrice = matchingProduct ? matchingProduct.price : 0;
        return productPrice * product.quantity;
      }).reduce((acc, price) => acc + price, 0);
      return {
        ...state,
        totalPrice: totalPrice,
      }
    }

    default:
      throw new Error("Invalid action type: " + action.type);
  }
}

function CartContextProvider({ children }) {
  const initialState = {
    products: [],
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

  const { data: products, loading, error } = useAllProducts();
  const [localStorageProducts, setLocalStorageProducts] = useLocalStorage("products", []);

  useEffect(() => {
    if (!loading && products && products.length > 0) {
      setLocalStorageProducts(products);
    }
  }, [products]);

  const finalProducts = error || loading ? localStorageProducts : products;

  useEffect(() => {
    setLocalStorageState(state);
  }, [state]);

  useEffect(() => {
    dispatch({ type: UPDATE_TOTAL_ITEMS });
    dispatch({ type: UPDATE_TOTAL_PRICE, payload: { products: finalProducts } });
  }, [state.products]);

  return (
    <CartContext.Provider
      value={{
        dispatch,
        products: state.products,
        totalItems: state.totalItems,
        totalPrice: state.totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
export { CartContextProvider };
