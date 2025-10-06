import { useEffect, useState } from "react";
import type { DebounceHook } from "../interfaces/mainTypes";

export const useDebounce:DebounceHook = (value, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timerId); 
    };
  }, [value, delay]);

  return debouncedValue;
};
