import { FlexBox } from "@ui5/webcomponents-react";
import { Logo, NavigationMenu, SearchBar, CartWidget } from "../../components";
import "./Header.css";

function Header() {
	return (
		<FlexBox className="header" justifyContent="SpaceBetween" alignItems="Center">
			<Logo />
			<NavigationMenu />
			<SearchBar />
			<CartWidget />
		</FlexBox>
	);
}

export default Header;
