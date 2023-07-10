import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import { CartProductItem } from "../../components";
import "./CartProductList.css";
import { FlexBox } from "@ui5/webcomponents-react";

function CartProductList() {
  const { products } = useContext(CartContext);

  return (
    <FlexBox
      className="cart-product-list"
      direction="Column"
      style={{ gap: "1rem" }}
    >
      {products.map((product) => {
        return <CartProductItem id={product.id} key={product.id} />;
      })}
    </FlexBox>
  );
}

export default CartProductList;
