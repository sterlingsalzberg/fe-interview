import { useDebounce } from "react-use";

export const useResize = (callback, ms = 300) => {
  useDebounce(() => {
    window.addEventListener("resize", callback);
    return () => {
      window.removeEventListener("resize", callback);
    }
  }, ms, [callback])
}
