import { useEffect, useState } from "react";

function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    try {
      const valueInLocalStorage = window.localStorage.getItem(key);
      if (valueInLocalStorage) {
	return JSON.parse(valueInLocalStorage);
      }
    } catch (error) {
      console.log(`Erreur lors de la lecture de ${key} depuis le localStorage`, error);
    }
    return defaultValue;
  });

  useEffect(() => {
    try {
    window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.log(`Erreur lors de l'écriture de ${key} dans le localStorage`, error);
    }
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;
