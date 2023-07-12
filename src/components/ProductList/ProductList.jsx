import { useRef } from "react";
import { Text, Toast } from "@ui5/webcomponents-react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList({ products, loading, error, localStorageProducts }) {
  const addToCartToast = useRef(null);
  const removeFromCartToast = useRef(null);

  if (loading && !localStorageProducts.length) return <Text>Loading...</Text>;
  if (error && !localStorageProducts.length)
    return <Text>Error: {error.message}</Text>;

  return (
    <>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCartToast={addToCartToast}
            removeFromCartToast={removeFromCartToast}
          />
        ))}
      </div>
      <Toast ref={addToCartToast} duration={3000} placement="BottomStart">
        Item successfully added to your cart!
      </Toast>
      <Toast ref={removeFromCartToast} duration={3000} placement="BottomStart">
        Item successfully removed from your cart!
      </Toast>
    </>
  );
}

export default ProductList;
