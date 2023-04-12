import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
        
        <NavBar />
        <ItemListContainer greeting={'Productos'} />
        <ItemDetailContainer/>
    </div>
  );
}

export default App;
