import { ReactNode, useState } from "react";
import { DataStoreContext } from "./DataStore.context";

interface DataStoreProviderProps {
  children: ReactNode;
}

export const DataStoreProvider = ({ children }: DataStoreProviderProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <DataStoreContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </DataStoreContext.Provider>
  );
};
