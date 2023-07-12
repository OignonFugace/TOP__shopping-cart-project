import { Text, Title, FlexBox, Button } from "@ui5/webcomponents-react";
import { useContext } from "react";
import "../assets/css/CartPage.css";
import { CartProductList } from "../components";
import CartContext from "../contexts/CartContext";
import { CLEAR_CART } from "../utils/contants";

function CartPage() {
  const {
    dispatch,
    products: cartProcucts,
    totalItems,
    totalPrice,
  } = useContext(CartContext);

  return (
    <div className="cart-page">
      {cartProcucts.length ? (
        <>
          <FlexBox alignItems="Center" justifyContent="SpaceBetween">
            <Title>Shopping Cart</Title>
            <Button onClick={() => dispatch({ type: CLEAR_CART })}>
              Clear Cart
            </Button>
          </FlexBox>
          <CartProductList />
          <Text style={{ fontSize: "1.1rem", textAlign: "right" }}>
            <span>Total ({totalItems} Items): </span>
            <span style={{ fontWeight: "bold" }}>${totalPrice}</span>
          </Text>
        </>
      ) : (
        <>
          <FlexBox alignItems="Center" justifyContent="SpaceBetween">
            <Title>Shopping Cart</Title>
          </FlexBox>
          <Text>There are no items in your cart.</Text>
        </>
      )}
    </div>
  );
}

export default CartPage;
