import React from 'react';
import { ThemeProvider } from "styled-components";

import { theme } from "./themes/planet-earth";
import { Index } from "./views";
import { StoreProvider } from "./store";

const App: React.FunctionComponent = () => (
  <ThemeProvider {...{ theme }}>
    <StoreProvider>
      <Index />
    </StoreProvider>
  </ThemeProvider>
);

export default App;
