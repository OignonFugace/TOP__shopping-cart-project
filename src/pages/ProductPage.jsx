import { useParams } from "react-router-dom";
import {
  ProductDetails,
  ProductImageGallery,
  ProductPurchaseOptions,
} from "../components";
import "../assets/css/ProductPage.css";
import useProductData from "../hooks/useProductData";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect, useState } from "react";

function ProductPage() {
  const { id: stringId } = useParams();
	const id = Number(stringId);
  const { data: product, loading, error } = useProductData(id);
  const [localStorageProducts, setLocalStorageProducts] = useLocalStorage(
    "products",
    []
  );
  const [localStorageLoaded, setLocalStorageLoaded] = useState(false);

  useEffect(() => {
    if (!loading && product) {
      setLocalStorageProducts((prevLocalStorageProducts) => {
        const productExists = prevLocalStorageProducts.some(
          (localStorageProduct) => localStorageProduct.id === id
        );
        if (productExists) return prevLocalStorageProducts;
        return [...prevLocalStorageProducts, product];
      });
    }
    setLocalStorageLoaded(true);
  }, [product]);

  const finalProduct =
    error || loading
      ? localStorageProducts.find(
          (localStorageProduct) => localStorageProduct.id === id
        )
      : product;

  return (
    <div className="product-page">
      <ProductImageGallery
        product={finalProduct}
        loading={loading}
        error={error}
        localStorageLoaded={localStorageLoaded}
      />
      <ProductDetails
        product={finalProduct}
        loading={loading}
        error={error}
        localStorageLoaded={localStorageLoaded}
      />
      <ProductPurchaseOptions product={finalProduct} />
    </div>
  );
}

export default ProductPage;
