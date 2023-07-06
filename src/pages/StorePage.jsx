import { FilterSidebar, ProductList } from "../components";
import "../assets/css/StorePage.css";

function StorePage() {
	return (
		<div className="store-screen">
			<FilterSidebar />
			<ProductList />
		</div>
	);
}

export default StorePage;
