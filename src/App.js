import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';
//add routes to the app
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/" element={<ItemListContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
