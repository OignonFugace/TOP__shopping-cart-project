import { FlexBox } from "@ui5/webcomponents-react";
import { NavLink } from "../../components";

function NavigationMenu() {

  return (
    <FlexBox style={{ gap: "2rem" }}>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/store"}>Store</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
    </FlexBox>
  );
}

export default NavigationMenu;
