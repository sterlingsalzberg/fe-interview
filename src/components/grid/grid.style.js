import styled from "styled-components/macro";

import { IS_MEDIUM, IS_SMALL } from "./../../utils/media";

export const Grid = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 0 7.5rem;

  ${IS_MEDIUM} {
    padding: 0 3.75rem;
  }

  ${IS_SMALL} {
    padding: 0 1rem;
  }
`;
