import './App.css';
import 'core-js/actual';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className='container-fluid fondo'>
      <Navbar />

      <Header />

      <Footer />

    </div>
  );
}

export default App;
