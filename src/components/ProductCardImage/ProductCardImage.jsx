import "./ProductCardImage.css";

function ProductCardImage({src, title}) {
  return (
    <div className="product-card-image">
      <img src={src} alt={title} />
    </div>
  );
}

export default ProductCardImage;
