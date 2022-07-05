import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer id={3} />
    </div>
  );
}

export default App;
