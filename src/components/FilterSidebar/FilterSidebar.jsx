import { Text } from "@ui5/webcomponents-react";
import { NavLink } from "react-router-dom";
import { toTitleCase } from "../../utils/misc";
import { useSearchParams } from "react-router-dom";

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
      <ul>
        <li>
          <NavLink to={createAllLink()}>
            <Text>All</Text>
          </NavLink>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <NavLink to={createCategoryLink(category)}>
              <Text>{toTitleCase(category)}</Text>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterSidebar;
