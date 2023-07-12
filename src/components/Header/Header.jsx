import { FlexBox } from "@ui5/webcomponents-react";
import { Logo, NavigationMenu, SearchBar, CartWidget } from "../../components";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <FlexBox
        justifyContent="SpaceBetween"
        alignItems="Center"
      >
        <Logo />
        <NavigationMenu />
      </FlexBox>
      <SearchBar />
      <FlexBox
        justifyContent="End"
        alignItems="Center"
      >
        <CartWidget />
      </FlexBox>
    </div>
  );
}

export default Header;
