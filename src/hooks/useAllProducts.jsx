import useFetch from "./useFetch";

function useAllProducts() {
  return useFetch("https://fakestoreapi.com/products");
}

export default useAllProducts;
