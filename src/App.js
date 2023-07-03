import Header from './components/Header';
import InputsBlock from './components/InputsBlock';
import Content from './components/Content';
import Footer from './components/Footer';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header title="Shopping List" />
        <InputsBlock />
        <Content />
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
