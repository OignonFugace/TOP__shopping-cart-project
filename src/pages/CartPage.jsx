import { Text, Title, FlexBox, Button } from "@ui5/webcomponents-react";
import { useContext } from "react";
import "../assets/css/CartPage.css";
import { CartProductList, Price } from "../components";
import CartContext from "../contexts/CartContext";
import { CLEAR_CART } from "../utils/contants";
import "@ui5/webcomponents-icons/dist/credit-card.js";
import "@ui5/webcomponents-icons/dist/basket.js";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();
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
            <span style={{ fontWeight: "bold" }}><Price value={totalPrice} /></span>
          </Text>
          <FlexBox justifyContent="End">
            <Button
              icon="credit-card"
              design="Emphasized"
              iconEnd
              onClick={() => navigate("checkout")}
            >
              Checkout
            </Button>
          </FlexBox>
        </>
      ) : (
        <FlexBox
          direction="Column"
          className="empty-cart"
          style={{ gap: "1rem" }}
        >
          <FlexBox alignItems="Center" justifyContent="Center">
            <Title>Shopping Cart</Title>
          </FlexBox>
          <Text className="empty-cart__page">
            There are no items in your cart.
          </Text>
          <FlexBox justifyContent="Center">
            <Button onClick={() => navigate("/store")} design="Emphasized" icon="basket">
              Continue Shopping
            </Button>
          </FlexBox>
        </FlexBox>
      )}
    </div>
  );
}

export default CartPage;
