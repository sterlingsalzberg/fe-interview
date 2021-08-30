import React, { useReducer } from "react";
import PropTypes from "prop-types";

import { reducer } from "./store.reducer";
import { StoreContext, initialState } from "./store.context";

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
};
StoreProvider.propTypes = {
  children: PropTypes.node,
};
