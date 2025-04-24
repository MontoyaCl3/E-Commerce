
import ReactDOM from 'react-dom/client'; // Usa 'react-dom/client' para React 18
import './index.css'; // Importa los estilos globales
import App from './App.jsx'; // Importa el componente principal
import { BrowserRouter } from "react-router-dom"; // Importa el enrutador
import { FiltersProvider } from './context/filters.jsx';


// Obtén el elemento raíz del DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación dentro del enrutador
root.render(
  <FiltersProvider>
    <h1>Hola</h1>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FiltersProvider>
);