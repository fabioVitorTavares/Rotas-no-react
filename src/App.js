import { BrowserRouter, Route, Navigate } from 'react-router-dom';

// Componentes
import Header from './Header';
import Login from './Login';
import Dashboard from './Dashboard';
import { Routes } from 'react-router-dom';
import Inicio from './Inicio';
import { useEffect } from 'react';
import PaginaNaoEncontrada from './PaginaNaoEncontrada';
import DadosUsuario from './DadosUsuario';


function App() {
  // Verifica se o usuário está autenticado
  const isAuthenticated = () => {
    // Implemente sua lógica de autenticação aqui
    // Exemplo:
    const token = localStorage.getItem('token');
    console.log('token :>> ', token);
    return !!token;
  };
  
  // Rota privada
  const PrivateRoute = ({ component: Component, ...rest }) => {
    if(!isAuthenticated()) {
      return <Navigate to={'/not-found'}/>
    }
    return (
      <div>
        <Header />
        <Component route={rest} />
      </div>
    )
  }
  
  // Rota pública
  const PublicRoute = ({ component: Component, ...rest }) => (
    <Component/>
  );
  return (
      <BrowserRouter>
        <Routes>
          {/* rotas publicas */}
          <>
            <Route path='/not-found' Component={() => <PublicRoute component={PaginaNaoEncontrada}/>}/>
            <Route path='/' Component={() => <PublicRoute component={Dashboard}/>}/>
            <Route path='/login' Component={() => <PublicRoute component={Login}/>}/>
          </>
          {/* rotas privadas */}
          <>
            <Route path='/inicio' Component={() => <PrivateRoute component={Inicio}/>}/>
            <Route path='/dados-usuario/:id' Component={(id) => <PrivateRoute component={DadosUsuario} perfil='PRODUTOR'/>}/>
            <Route path='/dados-usuario-ctv/:id' Component={(id) => <PrivateRoute component={DadosUsuario} perfil='CTV'/>}/>
          </>
        </Routes>
      </BrowserRouter>
  );
}

export default App;