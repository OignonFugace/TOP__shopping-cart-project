import { Text } from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";
import "./NavLink.css";

function NavLink({ children, to }) {
  const navigate = useNavigate();

  return (
    <Text
      className="nav-link"
      onClick={() => navigate(to)}
      style={{ cursor: "pointer", fontSize: "2rem" }}
    >
      {children}
    </Text>
  );
}

export default NavLink;
