import { Text, Title } from "@ui5/webcomponents-react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList({ products, loading, error, localStorageProducts }) {
  if (loading && !localStorageProducts.length) return <Text>Loading...</Text>;
  if (error && !localStorageProducts.length)
    return <Text>Error: {error.message}</Text>;

  return (
    <div className="product-list-screen">
      {products.length ? (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="no-product-message">
          <Title wrappingType="Normal">No Products Found</Title>
          <Text className="no-product-message__text">
            Please try a different search term or category.
          </Text>
        </div>
      )}
    </div>
  );
}

export default ProductList;
