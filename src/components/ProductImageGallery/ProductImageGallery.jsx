import { Text, MediaGallery, MediaGalleryItem } from "@ui5/webcomponents-react";

function ProductImageGallery({ product, loading, error, localStorageLoaded }) {

  if (loading && !localStorageLoaded) return <Text>Loading...</Text>;
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
