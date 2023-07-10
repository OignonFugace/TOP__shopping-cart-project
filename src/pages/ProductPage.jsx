import { useParams } from "react-router-dom";
import { ProductDetails, ProductImageGallery, ProductPurchaseOptions } from "../components";
import "../assets/css/ProductPage.css";


function ProductPage() {
  const { id } = useParams();

  return (
    <div className="product-page">
      <ProductImageGallery id={id} />
			<ProductDetails id={id} />
			<ProductPurchaseOptions id={id} />
    </div>
  );
}

export default ProductPage;
