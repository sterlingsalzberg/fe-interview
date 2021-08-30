import styled, { css } from "styled-components/macro";

import { MEDIA_HOVER, IS_MEDIUM, IS_SMALL } from "./../../utils/media";

const CSS_CONFIG = css`
  --animation-duration: 300ms;
`;

export const MerchantListItemWrapper = styled.li`
  ${CSS_CONFIG};

  list-style: none;
  cursor: pointer;

  svg {
    transition: transform var(--animation-duration) linear 0s;
    transform: rotate(
      ${({ $isActive }) => $isActive ? "-90deg" : "90deg"}
    );
  }
`;

export const MerchantListWrapper = styled.ul`
  margin: 0;
  padding: 2rem 2rem 6rem;

  ${IS_MEDIUM} {
    padding: 1rem 0 4rem;
  }
`;

export const MerchantListItemImage = styled.img`
  --image-width: 64px;

  display: block;
  width: var(--image-width);
  height: var(--image-width);
  border-radius: calc(var(--image-width) / 2);

  ${IS_SMALL} {
    display: none;
  }
`;

export const MerchantListItemInfo = styled.div`
  flex-grow: 1;
  padding: 0 2rem;

  ${IS_SMALL} {
    padding: 0 1rem 0 0;
  }
`;

export const MerchantListItemTitle = styled.h3`
  ${({ theme }) => theme.typography.headline};
  flex-grow: 1;
  margin-bottom: 0.5rem;
`;

export const MerchantListItemAction = styled.button`
  ${({ theme }) => theme.typography.small};
  cursor: pointer;
  margin-right: 1rem;
  padding: 0.2rem 1rem;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: transform var(--animation-duration) ease-out 0s;
  transition-property: transform, box-shadow, opacity;
  transform: translateY(0);
  box-shadow: ${({ theme }) => theme.shadows.zero};
  appearance: none;
  border: none;

  ${({ $isBill }) =>
    $isBill &&
    css`
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.error};
    `};

  ${MEDIA_HOVER} {
    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.one};
      transform: translateY(-5%);
      opacity: 0.8;
    }
  }
`;

export const MerchantListItemTag = styled.div`
  ${({ theme }) => theme.typography.small};
  display: inline-block;
  margin-bottom: 0.25rem;
  padding: 0.25rem 1rem;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:before {
    content: attr(name);
  }

  ${IS_SMALL} {
    text-transform: capitalize;
  }
`;

export const MerchantListItemHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.keyline};

  &:last-child {
    border-bottom: none;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    margin: 0.5rem 0;
    background-color: ${({ theme }) =>
      theme.colors.background.secondary};
    transition: transform var(--animation-duration) cubic-bezier(.75,0,.33,1) 0s;
    transform-origin: 100% 50%;
    transform: scale(0, 1);
    opacity: 1.0;
  }

  ${MEDIA_HOVER} {
    &:hover:before {
      transform-origin: 0 50%;
      transform: scale(1, 1);
    }
  }

  ${IS_SMALL} {
    padding: 1rem;
  }
`;

export const MerchantListItemFooter = styled.div`
  overflow: hidden;
  flex-grow: 1;
  height: 0;
  opacity: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.keyline};
  transition:
    height 0.25s ease-out 0s,
    opacity 0.12s linear 0s;

  ${({ $isActive }) =>
    $isActive &&
    css`
      height: var(--expanded-height);
      opacity: 1;
    `};
`;

export const MerchantListItemFooterContent = styled.div`
  flex-grow: 1;
  padding-bottom: 2rem;
`;
