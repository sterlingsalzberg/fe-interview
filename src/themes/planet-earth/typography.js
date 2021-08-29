import { css } from "styled-components";

export const typography = {
  headline: css`
    font-family: "Roboto", -apple-system, sans-serif;
    font-size: 1.5rem;
    line-height: 1.8rem;
    font-weight: 700;
    letter-spacing: 0.05rem;
  `,
  bodyHeadline: css`
    font-family: "Roboto", -apple-system, sans-serif;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
  `,
  body: css`
    font-family: "Roboto", -apple-system, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
  `,
  small: css`
    font-family: "Roboto", -apple-system, sans-serif;
    font-size: 0.825rem;
    font-weight: 700;
    letter-spacing: 0.05rem;
  `,
};
