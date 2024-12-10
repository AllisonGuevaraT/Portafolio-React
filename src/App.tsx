import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuComponent from './Components/MenuComponent';


const App: React.FC = () => {
  return (
    <div>
      <MenuComponent></MenuComponent>
      <Outlet />
    </div>
  );
}


export default App;
