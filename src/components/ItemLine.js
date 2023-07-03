import { FaTrashAlt } from 'react-icons/fa';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

function ItemLine({ item }) {
  const { items, setAndSaveItems } = useContext(DataContext);

  const handleCheck = id => {
    const listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = id => {
    const itemsList = items.filter(item => item.id !== id);
    setAndSaveItems(itemsList);
  };

  return (
    <li className="Item">
      <input
        type="checkbox"
        id={item.id}
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label
        htmlFor={item.id}
        style={item.checked ? { textDecoration: 'line-through' } : null}
      >
        {item.item}
      </label>
      <FaTrashAlt role="button" onClick={() => handleDelete(item.id)} />
    </li>
  );
}

export default ItemLine;
