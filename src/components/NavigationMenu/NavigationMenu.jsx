import { FlexBox, Text } from "@ui5/webcomponents-react";
import { NavLink, useSearchParams } from "react-router-dom";
import "./NavigationMenu.css";

function NavigationMenu() {
  const [searchParams] = useSearchParams();

  return (
    <FlexBox style={{ gap: "2rem" }} className="navigation-menu">
      <Text className="nav-link">
        <NavLink to={"/"}>Home</NavLink>
      </Text>
      <Text className="nav-link">
        <NavLink to={{ pathname: "/store", search: searchParams.toString() }}>
          Store
        </NavLink>
      </Text>
      <Text className="nav-link">
        <NavLink to={"/contact"}>Contact</NavLink>
      </Text>
    </FlexBox>
  );
}

export default NavigationMenu;
