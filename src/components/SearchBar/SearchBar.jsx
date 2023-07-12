import { Input, Icon } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/search.js";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SearchBar() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [searchValue, setSearchValue] = useState("");

	function handleSearch(e) {
		let query = e.target.value;
		let newSearchParams = new URLSearchParams(searchParams.toString());

		if (query !== "") {
			newSearchParams.set("search", query);
		} else {
			newSearchParams.delete("search");
		}

		navigate({ pathname: "/store", search: newSearchParams.toString() });
	}

	useEffect(() => {
		setSearchValue(searchParams.get("search"));
	}, [searchParams]);

  return (
    <Input
      icon={<Icon name="search" />}
      onChange={handleSearch}
      placeholder="Search Product"
			value={searchValue || ""}
    />
  );
}

export default SearchBar;
