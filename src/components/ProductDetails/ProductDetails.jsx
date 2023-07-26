import { Text, Title } from "@ui5/webcomponents-react";
import Price from "../Price/Price";
import "./ProductDetails.css";

function ProductDetails({ product, loading, error, localStorageLoaded }) {
  if (loading && !localStorageLoaded) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <div className="product-details">
      <Title wrappingType="Normal">{product.title}</Title>
      <Text>{product.description}</Text>
      <Text className="displayed-price">
        <Price value={product.price} />
      </Text>
    </div>
  );
}

export default ProductDetails;
