import { useLocalStorageKullan } from "./useLocalStorageKullan";

export const useGeceModu = (initialValue) => {
  const [geceModu, setGeceModu] = useLocalStorageKullan(
    "geceModu",
    initialValue
  );

  const changeValue = (value) => {
    setGeceModu(value);
  };

  return [geceModu, changeValue];
};
