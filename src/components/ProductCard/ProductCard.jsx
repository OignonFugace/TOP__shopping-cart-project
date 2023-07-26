import "./ProductCard.css";
import { Button, FlexBox, Text, Title } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/cart-4.js";
import "@ui5/webcomponents-icons/dist/cart-2.js";
import { Price, ProductCardImage } from "../../components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_QUANTITY,
} from "../../utils/contants";
import ToastContext from "../../contexts/ToastContext";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { dispatch, products: cartProducts } = useContext(CartContext);
  const { addToCartToast, removeFromCartToast, showToast } =
    useContext(ToastContext);

  return (
    <FlexBox
      direction="Column"
      justifyContent="SpaceBetween"
      className="product-card"
      onClick={() => navigate(`/store/product/${product.id}`)}
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
        <Text className="displayed-price">
          <Price value={product.price} />
        </Text>
        {cartProducts.find((cartProduct) => cartProduct.id === product.id) ? (
          <Button
            icon="cart-2"
            onClick={(event) => {
              event.stopPropagation();
              dispatch({
                type: REMOVE_PRODUCT_FROM_CART,
                payload: { id: product.id },
              });
              showToast(removeFromCartToast, {
                id: product.id,
                quantity: cartProducts.find((cartProduct) => cartProduct.id === product.id).quantity,
              });
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
              showToast(addToCartToast, {
                id: product.id,
              });
            }}
          >
            Add
          </Button>
        )}
      </FlexBox>
    </FlexBox>
  );
}

export default ProductCard;
