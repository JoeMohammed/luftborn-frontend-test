import api from "../../../../services/api-services";
import { useQueryWrapper } from "../../../../hooks/use-api-wrapper";

const endpoint = "products?limit=10";

export function useGetProductsApi() {
  const queryFn = async () => {
    const { data } = await api.get(endpoint);
    return data;
  };

  return useQueryWrapper(endpoint, queryFn);
}
