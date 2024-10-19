import { createContext, useState } from 'react';


const DataContext = createContext();


const DataProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('1'); // Initialize active tab to '1'
  
    return (
      <DataContext.Provider value={{ activeTab, setActiveTab }}>
        {children}
      </DataContext.Provider>
    );
  };
  
  export { DataProvider, DataContext };