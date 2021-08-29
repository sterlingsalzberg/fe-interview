import React, { useEffect, useReducer } from "react";
import PropTypes from "prop-types";

import { TYPES } from "./store.types";
import { reducer } from "./store.reducer";
import { StoreContext, initialState } from "./store.context";
import { useAction } from "./store.actions";
import { useApi } from "./store.utils";

export const StoreProvider = ({ children }) => {
  const { data: merchants, isLoading } = useApi("merchants");
  const [state, dispatch] = useReducer(reducer, initialState);
  const { setIsLoading } = useAction();

  useEffect(() => {
    if (!isLoading) {
      dispatch({
        type: TYPES.SET_MERCHANTS,
        payload: { merchants },
      });
    }
  }, [
    merchants,
    dispatch,
    isLoading,
  ]);

  useEffect(
    () => setIsLoading(isLoading),
    [setIsLoading, isLoading],
  );

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
};
StoreProvider.propTypes = {
  children: PropTypes.node,
};
