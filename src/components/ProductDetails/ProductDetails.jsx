import { Text, Title } from "@ui5/webcomponents-react";

function ProductDetails({ product, loading, error, localStorageLoaded }) {
	if (loading && !localStorageLoaded) return <Text>Loading...</Text>;
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
