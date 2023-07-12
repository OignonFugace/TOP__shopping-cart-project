import "./ProductCard.css";
import { Button, FlexBox, Text, Title, Toast } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/cart-4.js";
import "@ui5/webcomponents-icons/dist/cart-2.js";
import { ProductCardImage } from "../../components";
import { useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import CartContext from "../../contexts/CartContext";
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_QUANTITY,
} from "../../utils/contants";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { dispatch, products: cartProducts } = useContext(CartContext);
  const addToCartToast = useRef(null);
  const removeFromCartToast = useRef(null);

  function showToast(toast) {
    toast.current.show();
  }

  return (
    <FlexBox
      direction="Column"
      justifyContent="SpaceBetween"
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <ProductCardImage src={product.image} title={product.title} />
      <Title
        wrappingType="Normal"
        style={{
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        {product.title}
      </Title>
      <FlexBox justifyContent="SpaceBetween" alignItems="Center">
        <Text>${product.price}</Text>
        {cartProducts.find((cartProduct) => cartProduct.id === product.id) ? (
          <Button
            icon="cart-2"
            onClick={(event) => {
              event.stopPropagation();
              dispatch({
                type: REMOVE_PRODUCT_FROM_CART,
                payload: { id: product.id },
              });
              showToast(removeFromCartToast);
            }}
          >
            Remove
          </Button>
        ) : (
          <Button
            icon="cart-4"
            onClick={(event) => {
              event.stopPropagation();
              if (
                cartProducts.find(
                  (cartProduct) => cartProduct.id === product.id
                )
              ) {
                dispatch({
                  type: UPDATE_QUANTITY,
                  payload: { id: product.id, operand: 1 },
                });
                return;
              }
              dispatch({
                type: ADD_PRODUCT_TO_CART,
                payload: { id: product.id, quantity: 1 },
              });
              showToast(addToCartToast);
            }}
          >
            Add
          </Button>
        )}
      </FlexBox>
      <Toast ref={addToCartToast} duration={3000} placement="BottomStart">
        Item successfully added to your cart!
      </Toast>
      <Toast ref={removeFromCartToast} duration={3000} placement="BottomStart">
        Item successfully removed from your cart!
      </Toast>
    </FlexBox>
  );
}

export default ProductCard;
