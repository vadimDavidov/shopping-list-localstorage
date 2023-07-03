import { useState, useEffect, createContext } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppinglist'))
  );
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredItems = items?.filter(item =>
      item.item.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredItems.sort((a, b) => a.item < b.item && -1));
  }, [items, search]);

  const setAndSaveItems = newItems => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  };

  return (
    <DataContext.Provider
      value={{
        searchResults,
        items,
        setItems,
        search,
        setSearch,
        setAndSaveItems,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
