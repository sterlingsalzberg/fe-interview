import { TYPES } from "./store.types";
import { useStore } from "./store.hooks";
import { api } from "./store.utils";

export const useAction = () => {
  const { dispatch, state: { merchants } } = useStore();

  const updateMerchantById = async (id, status = {}) => {
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

    dispatch({
      type: TYPES.SET_MERCHANTS,
      payload: { merchants },
    });
  }

  const setIsLoading = (isLoading) => {
    dispatch({
      type: TYPES.SET_IS_LOADING,
      payload: { isLoading },
    })
  }

  return {
    setIsLoading,
    updateMerchantById,
  };
}
