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
};

// So we can see the loader!
export const delayForEffect = (callback, ms = 800) => {
  setTimeout(callback, ms);
}
