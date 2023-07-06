import useProductData from "../../hooks/useProductData";
import "./ProductCard.css";
import { Button, FlexBox, Text, Title } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/cart-4.js";
import { ProductCardImage } from "../../components";

function ProductCard({ id }) {
  const { data: product, loading, error } = useProductData(id);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <FlexBox direction="Column" justifyContent="SpaceBetween" className="product-card">
			<ProductCardImage src={product.image} title={product.title} />
      <Title
        wrappingType="Normal"
        style={{
					cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        {product.title}
      </Title>
      <FlexBox justifyContent="SpaceBetween" alignItems="Center">
        <Text>${product.price}</Text>
        <Button icon="cart-4">Add</Button>
      </FlexBox>
    </FlexBox>
  );
}

export default ProductCard;
