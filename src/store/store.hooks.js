import { useContext } from "react";
import { StoreContext } from "./store.context";

export const useStore = () => {
  const context = useContext(StoreContext)

  if (context === undefined) {
    throw new Error(`StoreContext must be called within StoreProvider`)
  }

  return context
}
