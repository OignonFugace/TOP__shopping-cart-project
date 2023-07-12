import { Text } from "@ui5/webcomponents-react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList({ products, loading, error, localStorageProducts }) {
  if (loading && !localStorageProducts.length) return <Text>Loading...</Text>;
  if (error && !localStorageProducts.length) return <Text>Error: {error.message}</Text>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
