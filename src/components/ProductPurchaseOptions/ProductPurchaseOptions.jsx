import { Title, StepInput, FlexBox, Label } from "@ui5/webcomponents-react";
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
        <FlexBox
          justifyContent="End"
          alignItems="Center"
          style={{ gap: "1ch" }}
        >
          <Label for="quantity">Quantity:</Label>
          <StepInput
            id="quantity"
            max={30}
            min={1}
            value={1}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </FlexBox>
        <AddToCartButton quantity={quantity} />
      </FlexBox>
    </div>
  );
}

export default ProductPurchaseOptions;
