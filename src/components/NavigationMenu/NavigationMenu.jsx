import { FlexBox } from "@ui5/webcomponents-react";
import { useSearchParams } from "react-router-dom";
import { NavLink } from "../../components";

function NavigationMenu() {
  const [searchParams] = useSearchParams();

  return (
    <FlexBox style={{ gap: "2rem" }}>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={{ pathname: "/store", search: searchParams.toString() }}>Store</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
    </FlexBox>
  );
}

export default NavigationMenu;
