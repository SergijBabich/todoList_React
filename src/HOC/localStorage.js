
import {useState} from 'react';

export const useLocalStorage = (localItem) => {
  const [loc, setState] = useState[localStorage.getItem(localItem)];

    const setLoc = (newItem) => {
      localStorage.setItem(localItem, newItem);
      setState(newItem);
    }
    return [loc, setLoc];
}
