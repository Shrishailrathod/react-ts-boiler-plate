/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

interface DataStoreContextType {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DataStoreContext = createContext<DataStoreContextType | undefined>(
  undefined
);

export const useDataStoreContext = () => {
  const context = useContext(DataStoreContext);

  // Handle the case where context is undefined
  if (!context) {
    throw new Error(
      "useDataStoreContext must be used within a DataStore Provider"
    );
  }

  return context;
};
