import { Text, Title, FlexBox, Button } from "@ui5/webcomponents-react";
import { useContext } from "react";
import "../assets/css/CartPage.css";
import { CartProductList } from "../components";
import CartContext from "../contexts/CartContext";
import { CLEAR_CART } from "../utils/contants";

function CartPage() {
  const { dispatch, products } = useContext(CartContext);

  return (
    <div className="cart-page">
      <FlexBox alignItems="Center" justifyContent="SpaceBetween">
        <Title>Shopping Cart</Title>
      </FlexBox>
      {products.length ? (
        <>
          <Button onClick={() => dispatch({ type: CLEAR_CART })}>
            Clear Cart
          </Button>
          <CartProductList />
        </>
      ) : (
        <Text>There are no items in your cart.</Text>
      )}
    </div>
  );
}

export default CartPage;
