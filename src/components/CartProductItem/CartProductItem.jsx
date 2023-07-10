import useProductData from "../../hooks/useProductData";
import { FlexBox, Text, Title, Icon } from "@ui5/webcomponents-react";
import "./CartProductItem.css";
import "@ui5/webcomponents-icons/dist/add.js";
import "@ui5/webcomponents-icons/dist/less.js";
import "@ui5/webcomponents-icons/dist/delete.js";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import {
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_QUANTITY,
} from "../../utils/contants";
import { useNavigate, Link } from "react-router-dom";

function CartProductItem({ id }) {
  const { data: product, loading, error } = useProductData(id);
  const { dispatch, products: cartProducts } = useContext(CartContext);
  const navigate = useNavigate();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const itemQuantity = cartProducts.find((product) => product.id === id)
    .quantity;

  return (
    <div className="cart-product-item">
      <div className="product-info">
        <div className="cart-product-item__image-container">
          <img
            src={product.image}
            alt={product.title}
            onClick={() => navigate(`/product/${id}`)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <FlexBox direction="Column">
          <FlexBox justifyContent="SpaceBetween">
            <Title wrappingType="Normal" className="cart-product-item__title">
              <Link to={`/product/${id}`}>{product.title}</Link>
            </Title>
            <Text style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              ${product.price * itemQuantity}
            </Text>
          </FlexBox>
          <Text style={{ textAlign: "right" }}>
            Quantity: <span style={{ fontWeight: "bold" }}>{itemQuantity}</span>
          </Text>
        </FlexBox>
      </div>
      <FlexBox
        direction="Column"
        className="cart-product-item__icons-section"
        justifyContent="SpaceAround"
        alignItems="Center"
      >
        <div
          onClick={() =>
            dispatch({ type: UPDATE_QUANTITY, payload: { id: id, operand: 1 } })
          }
        >
          <Icon className="cart-item___icon" name="add" />
        </div>
        <div
          onClick={() => {
            if (itemQuantity === 1) {
              dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: { id: id } });
              return;
            }
            dispatch({
              type: UPDATE_QUANTITY,
              payload: { id: id, operand: -1 },
            });
          }}
        >
          <Icon className="cart-item___icon" name="less" />
        </div>
        <div
          onClick={() =>
            dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: { id: id } })
          }
        >
          <Icon className="cart-item___icon" name="delete" />
        </div>
      </FlexBox>
    </div>
  );
}

export default CartProductItem;
