import "@ui5/webcomponents-icons/dist/cart.js";
import { Icon } from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";
import "./CartWidget.css";

function CartWidget() {
	const navigate = useNavigate();

	return (
		<div className="cart-widget" onClick={() => navigate("/cart")}>
			<Icon name="cart" className="cart-widget__icon" />
		</div>
	);
}

export default CartWidget;
