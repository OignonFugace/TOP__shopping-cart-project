import useProductData from "../../hooks/useProductData";
import "./ProductCard.css";
import { Button, FlexBox, Text, Title } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/cart-4.js";
import "@ui5/webcomponents-icons/dist/cart-2.js";
import { ProductCardImage } from "../../components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_QUANTITY,
} from "../../utils/contants";

function ProductCard({ id }) {
  const navigate = useNavigate();
  const { data: product, loading, error } = useProductData(id);
  const { dispatch, products: cartProducts } = useContext(CartContext);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <FlexBox
      direction="Column"
      justifyContent="SpaceBetween"
      className="product-card"
      onClick={() => navigate(`/product/${id}`)}
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
        {cartProducts.find((product) => product.id === id) ? (
          <Button
            icon="cart-2"
            onClick={(event) => {
              event.stopPropagation();
              dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: { id: id } });
            }}
          >
            Remove
          </Button>
        ) : (
          <Button
            icon="cart-4"
            onClick={(event) => {
              event.stopPropagation();
              if (cartProducts.find((product) => product.id === id)) {
                dispatch({
                  type: UPDATE_QUANTITY,
                  payload: { id: id, operand: 1 },
                });
                return;
              }
              dispatch({
                type: ADD_PRODUCT_TO_CART,
                payload: { id: id, quantity: 1 },
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
