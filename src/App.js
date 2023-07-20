import './App.css';
import Navigationbar from './Navigation';
import Login from './Login';
import Products from './Products';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Productdetails from './Productdetails';

function App() {
  return (
    <div >
      <Navigationbar/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/productdetails/:productId' element={<Productdetails/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;





