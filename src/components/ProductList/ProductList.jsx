import { Text } from "@ui5/webcomponents-react";
import { useEffect } from "react";
import useAllProducts from "../../hooks/useAllProducts";
import useLocalStorage from "../../hooks/useLocalStorage";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import productsData from "../../data/products";

function ProductList() {
  const { data: products, loading, error } = useAllProducts();

  const [localStorageProducts, setLocalStorageProducts] = useLocalStorage(
    "products",
    []
  );

  useEffect(() => {
    if (!loading && products && products.length > 0) {
      setLocalStorageProducts(products);
    }
  }, [products]);

  const finalProducts = error || loading ? localStorageProducts : products;

  if (loading && !localStorageProducts.length) return <Text>Loading...</Text>;
  if (error && !localStorageProducts.length) return <Text>Error: {error.message}</Text>;

  return (
    <div className="product-list">
      {finalProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
