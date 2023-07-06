import { FlexBox } from "@ui5/webcomponents-react";
import Logo from "../Logo/Logo";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
	return (
		<FlexBox>
			<Logo />
			<NavigationMenu />
			<SearchBar />
		</FlexBox>
	);
}

export default Header;
