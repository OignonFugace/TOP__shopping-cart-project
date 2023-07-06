import { FlexBox } from "@ui5/webcomponents-react";
import { NavLink } from "../../components";

function NavigationMenu() {

  return (
    <FlexBox style={{ gap: "1rem" }}>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/store"}>Store</NavLink>
    </FlexBox>
  );
}

export default NavigationMenu;
