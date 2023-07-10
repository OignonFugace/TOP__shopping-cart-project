import { Text, Title } from "@ui5/webcomponents-react";
import useProductData from "../../hooks/useProductData";

function ProductDetails({ id }) {
	const { data: product, loading, error } = useProductData(id);

	if (loading) return <Text>Loading...</Text>;
	if (error) return <Text>Error: {error.message}</Text>;

	return (
		<div>
			<Title wrappingType="Normal">{product.title}</Title>
			<Text>{product.description}</Text>
			<Text>${product.price}</Text>
		</div>
	);
}

export default ProductDetails;
