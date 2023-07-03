import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';
import { useState, useContext } from 'react';
import DataContext from '../context/DataContext';

function AddItem() {
  const { items, setAndSaveItems } = useContext(DataContext);
  const [newItem, setNewItem] = useState('');
  const inputRef = useRef();
  const capitalizedNewItem = newItem.charAt(0).toUpperCase() + newItem.slice(1);

  const addNewItem = item => {
    const id = items?.length ? items[items.length - 1].id + 1 : 1;
    const defItem = { id, checked: false, item };
    const listItems = [...items, defItem];
    setAndSaveItems(listItems);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!newItem) return;
    addNewItem(newItem);
    setNewItem('');
  };

  return (
    <form className="AddItem" onSubmit={handleSubmit}>
      <label htmlFor="additem">Add Item</label>
      <input
        id="additem"
        type="text"
        placeholder="Add Item"
        autoFocus
        ref={inputRef}
        value={capitalizedNewItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button type="submit" onClick={() => inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  );
}

export default AddItem;
