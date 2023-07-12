import { Text, Title } from "@ui5/webcomponents-react";
import { NavLink } from "react-router-dom";
import { toTitleCase } from "../../utils/misc";
import { useSearchParams } from "react-router-dom";
import "./FilterSidebar.css";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

function FilterSidebar() {
  const [searchParams] = useSearchParams();

  function createCategoryLink(category) {
    const params = new URLSearchParams(searchParams);
    params.set("category", category);
    return {
      pathname: "/store",
      search: params.toString(),
    };
  }

  function createAllLink() {
    const params = new URLSearchParams(searchParams);
    params.delete("category");
    return {
      pathname: "/store",
      search: params.toString(),
    };
  }

  return (
    <div className="filter-sidebar">
      <Title className="filter-sidebar__title">Browse Categories:</Title>
      <ul>
        <li>
          <Text className="nav-link">
            <NavLink to={createAllLink()}>All</NavLink>
          </Text>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <Text className="nav-link">
              <NavLink to={createCategoryLink(category)}>
                {toTitleCase(category)}
              </NavLink>
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterSidebar;
