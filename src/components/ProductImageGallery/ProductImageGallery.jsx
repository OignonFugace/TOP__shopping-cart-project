import useProductData from "../../hooks/useProductData";
import { Text, MediaGallery, MediaGalleryItem } from "@ui5/webcomponents-react";

function ProductImageGallery({ id }) {
  const { data: product, loading, error } = useProductData(id);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <div className="product-image-gallery">
      <MediaGallery>
        <MediaGalleryItem>
          <img src={product.image} alt={product.title} />
        </MediaGalleryItem>
      </MediaGallery>
    </div>
  );
}

export default ProductImageGallery;
