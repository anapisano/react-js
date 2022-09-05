import './App.css';
import 'core-js/actual';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ItemListConteiner from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {

  return (
    <div className='container-fluid fondo'>
      <Navbar />
      
      <ItemListConteiner greeting="aca iria una listita"/>
      
      <ItemCount stock={15} initial={1} onAdd={0}/>

      <Footer />

    </div>
  );
}

export default App;
