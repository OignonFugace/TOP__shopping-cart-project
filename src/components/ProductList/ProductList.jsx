import useAllProducts from "../../hooks/useAllProducts";
import ProductCard from "../ProductCard/ProductCard";
import { Text } from "@ui5/webcomponents-react";
import "./ProductList.css";

function ProductList() {
  const { data: products, loading, error } = useAllProducts();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} id={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
