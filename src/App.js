
import './App.css';

function App() {
  let imagen = "kqXzqebG"
  let titulo = "Hamburguesa con queso"
  let calorias = "243"
  let descripcion = "El sabor de la carne 100% vacuna más deliciosa, acompañado del pan más esponjoso, kétchup, mostaza y cebolla triturada."

  const producto = {id:1, imagen:imagen, title:titulo, calories:calorias, description:descripcion }
  
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 offset-md-2'>
          <img src={imagen} alt={producto.title} className="img-fluid"/>
        </div>
        <div className='col-md-4'>
          <h1>{producto.title}</h1>
          <p>{producto.calories}</p>
          <p>{producto.description}</p>

        </div>
      </div>
    </div>
  );
}

export default App;
