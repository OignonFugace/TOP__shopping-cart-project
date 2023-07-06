import useProductData from "../../hooks/useProductData";
import { Text } from "@ui5/webcomponents-react";

function ProductDetails({ id }) {
	const { data: product, loading, error } = useProductData(id);

	if (loading) return <Text>Loading...</Text>;
	if (error) return <Text>Error: {error.message}</Text>;

	return (
		<div>
			<h2>{product.title}</h2>
			<p>{product.description}</p>
			<p>{product.price}$</p>
		</div>
	);
}

export default ProductDetails;
