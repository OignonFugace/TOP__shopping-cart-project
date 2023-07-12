import { Title, StepInput, FlexBox } from "@ui5/webcomponents-react";
import { useState } from "react";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

function ProductPurchaseOptions() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-purchase-options">
      <FlexBox
        direction="Column"
        alignItems="Stretch"
        className="product-purchase-options"
        style={{ gap: "1rem" }}
      >
        <Title level="H3">Buy Product</Title>
        <StepInput
          max={30}
          min={1}
          value={1}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
        <AddToCartButton quantity={quantity} />
      </FlexBox>
    </div>
  );
}

export default ProductPurchaseOptions;
