import { useContext } from 'react';
import DataContext from '../context/DataContext';

function Search() {
  const { search, setSearch } = useContext(DataContext);

  return (
    <form>
      <label htmlFor="searchitem">Search Item</label>
      <input
        id="searchitem"
        type="text"
        placeholder="Search Item"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </form>
  );
}

export default Search;
