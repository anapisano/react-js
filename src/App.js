import './App.css';
import 'core-js/actual';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div className='container-fluid fondo'>
      <Navbar />
      
      <ItemListContainer />

      <Footer />

    </div>
  );
}

export default App;
