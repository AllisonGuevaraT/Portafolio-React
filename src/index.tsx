import App from './App';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import BeneficiosComponent from './Components/BeneficiosComponent';
import TecnologiasComponent from './Components/TecnologiaComponente';
import HomeView from './Views/HomeView';
import ContactoView from './Views/ContactoView';


const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(  
  <Router>
    <Routes>    
      <Route path="/" element={<App />}>
        <Route index element={<HomeView/>} />
        <Route path='/beneficios' element={<BeneficiosComponent/>} />  
        <Route path='/tecnologias' element={<TecnologiasComponent/>} />  
        <Route path='/contacto' element={<ContactoView/>} />  
      </Route>  
    </Routes>
  </Router>,
);

reportWebVitals();
