import { FilterSidebar, ProductList } from "../components";
import "../assets/css/StorePage.css";
import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useAllProducts from "../hooks/useAllProducts";
import { useSearchParams } from "react-router-dom";

function StorePage() {
  const [searchParams] = useSearchParams();
  const { data: products, loading, error } = useAllProducts();
  const [localStorageProducts, setLocalStorageProducts] = useLocalStorage(
    "products",
    []
  );
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (!loading && products && products.length > 0) {
      setLocalStorageProducts(products);
    }
  }, [products]);

  useEffect(() => {
    let categoryFilter = searchParams.get("category");
    let searchFilter = searchParams.get("search");

    let result = error || loading ? localStorageProducts : products;

    if (categoryFilter) {
      result = result.filter((product) =>
        product.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    if (searchFilter) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchFilter.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [searchParams, products, error, loading]);

  return (
    <div className="store-screen">
      <FilterSidebar />
      <ProductList
        products={filteredProducts}
        loading={loading}
        error={error}
        localStorageProducts={localStorageProducts}
      />
    </div>
  );
}

export default StorePage;
