import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='category/:categoryId' element={<ItemListContainer />}/>
          <Route path='item/:itemId' element={<ItemDetailContainer />}/>
          <Route path='*' element={ <h4>404 NOT FOUND</h4>}/>
          </Routes>     
        </BrowserRouter>

    </div>
  );
}

export default App;
