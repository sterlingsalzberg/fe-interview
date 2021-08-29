import { createContext } from "react";

export const initialState = {
  merchants: [],
};

export const StoreContext = createContext({
  state: initialState,
  dispatch: () => undefined,
});
