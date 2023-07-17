import './App.css';
import TableWithEnglishWords from './components/Table';
import BtnAddWord from './components/BtnAddWord';

const App = () => {
  return (
    <div className="app">
      <TableWithEnglishWords />
      <BtnAddWord />
    </div>
  );
}

export default App;