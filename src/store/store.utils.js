import { useState, useEffect } from "react";

import { API_BASE } from "./../shared";

export const api = async (path = "", options = {}) => {
  try {
    const response = await fetch(`${API_BASE}${path}`, options);
    return await response.json();
  }
  catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
}

export const useApi = (path = "", options = {}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() =>
    (async () => {
      setIsLoading(true);
      const data = await api(path, options);
      setData(data);
      setIsLoading(false);
    })(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setData, setIsLoading],
  );

  return {
    data,
    isLoading,
  };
};
