import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

//Importar los compon creados
import Inicio from './components/inicio';
import Uno from './components/uno';
import Dos from './components/dos';
import Tres from './components/tres';
import Cuatro from './components/cuatro';
import NavBarProy from './layouts/navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavBarProy /> }>
            <Route index element={ <Inicio /> } />
            <Route path='uno' element={ <Uno />} />
            <Route path='dos' element={ <Dos />} />
            <Route path='tres' element={ <Tres />} />
            <Route path='cuatro' element={ <Cuatro />} />

            <Route path='*' element={ <Navigate replace to="/" /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
