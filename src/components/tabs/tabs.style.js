import styled, { css } from "styled-components/macro";

import { MEDIA_HOVER, IS_SMALL } from "./../../utils/media";

const GUTTER = "0.5rem";

export const TabsWrapper = styled.div``;

export const TabsHeaderWrapper = styled.ul`
  list-style: none;
  position: sticky;
  z-index: ${({ theme }) => theme.zIndex.navigation};
  top: 2rem;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  background-color: ${({ theme }) =>
    theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  backdrop-filter: blur(6px);

  ${IS_SMALL} {
    justify-content: stretch;
  }
`;

export const TabsHeaderItem = styled.li.attrs(({ $isActive }) => ({
  role: "tab",
  "aria-selected": $isActive,
}))`
  ${({ theme }) => theme.typography.bodyHeadline};
  cursor: pointer;
  flex-grow: 1;
  padding: 1rem 4rem;
  margin-right: 0.5rem;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius};

  &:last-of-type {
    margin-right: 0;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `};

  ${MEDIA_HOVER} {
    &:hover {
      opacity: ${({ $isActive }) => $isActive ? 1.0 : 0.5};
    }
  }

  ${IS_SMALL} {
    ${({ theme }) => theme.typography.small};
    padding: 1rem 2rem;
  }
`;

export const TabsHeaderItemHighlight = styled.div`
  position: absolute;
  z-index: -1;
  top: ${GUTTER};
  left: 0;
  width: var(--item-width, 0);
  height: calc(100% - (${GUTTER} * 2));
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: transform 0.2s ease-out 0s;
  transition-property: transform, width;
  transform: translate(var(--item-x, 0), 0);
`;
