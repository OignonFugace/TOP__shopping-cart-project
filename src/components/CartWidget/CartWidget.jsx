import "@ui5/webcomponents-icons/dist/cart.js";
import "@ui5/webcomponents-icons/dist/cart-full.js";
import { Icon, Text } from "@ui5/webcomponents-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import "./CartWidget.css";

function CartWidget() {
  const { totalItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-widget" onClick={() => navigate("/cart")}>
      {totalItems ? (
        <div className="cart-widget__container">
          <Icon name="cart-full" className="cart-widget__icon" />
          <div className="item-number-indicator__container">
            <Text className="item-number-indicator">{totalItems}</Text>
          </div>
        </div>
      ) : (
        <Icon name="cart" className="cart-widget__icon" />
      )}
    </div>
  );
}

export default CartWidget;
