import { createContext } from "react";

const CartContext = createContext();

function CartContextProvider({ children }) {
	return (
		<CartContext.Provider>
			{children}
		</CartContext.Provider>
	)
}

export default CartContext;
export { CartContextProvider };
