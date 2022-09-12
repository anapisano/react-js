import './App.css';
import 'core-js/actual';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <div className='container-fluid fondo'>
      <Navbar />
      
      <ItemListContainer />
      
      <ItemDetailContainer />

      <Footer />

    </div>
  );
}

export default App;
