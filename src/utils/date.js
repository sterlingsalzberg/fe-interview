export const formatDate = (value) => {
  let date  = new Date(value);
  let options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  return date.toLocaleDateString("en-US", options);
};
