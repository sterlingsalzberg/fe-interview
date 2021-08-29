export const QUERY = {
  MEDIUM: '(max-width: 1023px)',
  SMALL: '(max-width: 767px)',
};

export const MEDIA_HOVER = '@media (hover: hover)';
export const MEDIA_NO_HOVER = '@media (hover: none)';
export const IS_MEDIUM = `@media screen and ${QUERY.MEDIUM}`;
export const IS_SMALL = `@media screen and ${QUERY.SMALL}`;
