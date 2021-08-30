import styled from "styled-components";

import { ICON_FALLBACK } from "./../../shared";

export const LoaderWrapper = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.loading};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) =>
    theme.colors.background.secondary};
`;

export const LoaderPosition = styled.figure`
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  transform: translate(-50%, -50%);

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 50%;
    filter: blur(2px);
    opacity: 0.25;
    animation: ${({ theme }) => theme.animations.bounceShadow} 1s linear 0s infinite;
  }
`;

export const LoaderImage = styled.div`
  position: relative;
  display: block;
  width: 64px;
  height: 64px;
  background-image: url(${ICON_FALLBACK});
  background-position: center;
  background-size: contain;
  border-radius: 32px;
  animation: ${({ theme }) => theme.animations.bounce} 1s linear 0s infinite;
`;
