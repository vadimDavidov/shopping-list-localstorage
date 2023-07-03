import { useContext } from 'react';
import DataContext from '../context/DataContext';

function Footer() {
  const { items } = useContext(DataContext);
  const today = new Date();

  return (
    <footer className="Footer">
      <span>Copyright &copy; {today.getFullYear()}</span>
      <span>🛍</span>
      <span>
        {items.length} {items.length === 1 ? 'item' : 'items'}
      </span>
    </footer>
  );
}

export default Footer;
