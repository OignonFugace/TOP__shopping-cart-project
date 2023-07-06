import useFetch from "./useFetch";

function useProductData(id) {
  const { data, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

  return { data, loading, error };
}

export default useProductData;
