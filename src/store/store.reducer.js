import { TYPES } from "./store.types";
import { initialState } from "./store.context";

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.SET_IS_LOADING:
    case TYPES.SET_MERCHANTS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
