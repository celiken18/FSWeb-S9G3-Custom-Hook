import { useState } from "react";

export const useLocalStorageKullan = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const rawData = localStorage.setItem(key);
    const data = JSON.parse(rawData);
    const result = data ? data : initialValue;
    return result;
  });
  const changeValue = (value) => {
    localstorage.setItem(key, JSON.stringify(value));
    setState(value);
  };
  return [state, changeValue];
};
