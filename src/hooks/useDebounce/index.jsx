import { useRef } from "react";

// 防止抖动
const useDebounce = (fn, delay) => {
  let timeout = useRef();
  const run = (value) => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      fn(value);
    }, delay);
  };

  const cancel = () => {
    clearTimeout(timeout.current);
    timeout = null;
  };

  return [run, cancel];
};

export default useDebounce;
