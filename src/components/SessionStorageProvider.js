import { createContext, useContext, useState } from 'react';

const SessionStorageContext = createContext();

export const SessionStorageProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  const saveToSessionStorage = (value) => {
    sessionStorage.setItem('profileUrl', value);
    setInputValue(value);
  };

  const contextValue = {
    inputValue,
    saveToSessionStorage,
  };

  return (
    <SessionStorageContext.Provider value={contextValue}>
      {children}
    </SessionStorageContext.Provider>
  );
};

export const useSessionStorageContext = () => useContext(SessionStorageContext);
