import ItemLine from './ItemLine';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { FaTrashAlt } from 'react-icons/fa';

function Content() {
  const { items, setAndSaveItems, searchResults } = useContext(DataContext);

  const handleDelete = () => {
    const itemsList = items?.filter(item => !item.checked);
    setAndSaveItems(itemsList);
  };

  return (
    <main className="Content">
      <ul>
        {searchResults?.length ? (
          searchResults.map(item => <ItemLine key={item.id} item={item} />)
        ) : (
          <h4>You have no items in your list.</h4>
        )}
      </ul>
      {items?.length > 1 && (
        <button className="deleteMany" onClick={() => handleDelete()}>
          <FaTrashAlt role="button" />
          <span>Delete chosen items</span>
        </button>
      )}
    </main>
  );
}

export default Content;
