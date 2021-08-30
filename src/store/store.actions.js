import { TYPES } from "./store.types";
import { useStore } from "./store.hooks";
import { api, delayForEffect } from "./store.utils";

export const useAction = () => {
  const { dispatch, state: { merchants } } = useStore();

  const setIsLoading = (isLoading) => {
    dispatch({
      type: TYPES.SET_IS_LOADING,
      payload: { isLoading },
    })
  }

  const fetchMerchants = async () => {
    setIsLoading(true);

    const merchants = await api("merchants");

    delayForEffect(() => {
      dispatch({
        type: TYPES.SET_MERCHANTS,
        payload: { merchants },
      });
      setIsLoading(false);
    });
  }

  const updateMerchantById = async (id, status = {}) => {
    setIsLoading(true);
    const updatedMerchant = await api(`merchants/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(status),
    });

    for (let i = 0; i < merchants.length; i++) {
      if (merchants[i].id === id) {
        merchants[i] = updatedMerchant;
      }
    }

    delayForEffect(() => {
      dispatch({
        type: TYPES.SET_MERCHANTS,
        payload: { merchants },
      });
      setIsLoading(false);
    })
  }

  return {
    setIsLoading,
    fetchMerchants,
    updateMerchantById,
  };
}
