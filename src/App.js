import './App.css';
import 'core-js/actual';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ItemListConteiner from './components/ItemListContainer';

function App() {

  return (
    <div className='container-fluid fondo'>
      <Navbar />
      
      <ItemListConteiner greeting="aca iria una listita"/>

      <Footer />

    </div>
  );
}

export default App;
