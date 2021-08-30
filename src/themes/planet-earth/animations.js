import { keyframes } from "styled-components";

export const animations = {
  bounce: keyframes`
    0% {
      transform: translateY(0) scaleY(1);
    }
    10% {
      transform: translateY(0) scaleY(0.7);
    }
    50% {
      transform: translateY(-50%) scaleY(1.2);
    }
    90% {
      transform: translateY(-50%) scaleY(0.85);
    }
    100% {
      transform: translateY(0) scaleY(1);
    }
  `,

  bounceShadow: keyframes`
    0% {
      transform: scaleX(0.9);
    }
    10% {
      transform: scaleX(0.95);
    }
    50% {
      transform: scaleX(0.6);
    }
    90% {
      transform: scaleX(0.6);
    }
    100% {
      transform: scaleX(0.9);
    }
  `,
}
