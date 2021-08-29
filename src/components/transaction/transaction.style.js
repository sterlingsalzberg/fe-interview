import styled from "styled-components/macro";

import { IS_SMALL } from "./../../utils/media";

export const TransactionWrapper = styled.div`
  display: flex;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.keyline};

  &:last-child {
    border-bottom: none;
  }

  ${IS_SMALL} {
    padding: 1rem;
  }
`;

export const TransactionValue = styled.div`
  flex-grow: 1;
`;

export const TransactionDate = styled.time.attrs(({ datetime }) => ({
  datetime,
}))``;
