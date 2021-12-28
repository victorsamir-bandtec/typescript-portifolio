import { useState, useEffect } from 'react';

interface IPersisted {
  key: string
  initialState: object
}

const usePersistedState= ({key,initialState}: IPersisted) => {
  const [state, setState] = useState(() => {
    const storagedValue = localStorage.getItem(`@Samir:${key}`);

    if (storagedValue) {
      return JSON.parse(storagedValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(`@Samir:${key}`, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;

