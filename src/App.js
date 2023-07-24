import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import routes from "./config/routes";//Se importan todas las rutas del sistema
import AuthProvider from './api/AuthProvider';//Se importa la configuración del provider
import AdminLogin from './pages/Admin/Login/Login';
import SinResultados from './pages/SinResultados.js'
import HandleError from './components/HandleErrror/HandleError';
import useAuth from "./hooks/useAuth";
import { ConfigProvider } from 'antd';
import esES from 'antd/lib/locale/es_ES';
import moment from 'moment';
import 'moment/locale/es'
import {visitas} from './utils/scripts';
moment.locale('es')
 
function App() {
  return (
    <HandleError>
      <ConfigProvider locale={esES}>
        <AuthProvider>
          <LoginLayaout/>
        </AuthProvider> 
      </ConfigProvider>
    </HandleError>
  )
}

const LoginLayaout = () => {
  const {user} = useAuth();
  return(
    <>
      { (user.user)?
        <Router>
          <Switch>           
            {routes.map((route, i) => (
              <RoutesWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </Router> :
        <Router>
          <Switch>
            <Route path="/" render= { AdminLogin }/>
          </Switch>
        </Router>
      }
    </>
   )
}

//Función que itera las rutas
function RoutesWithSubRoutes(route) {
  //visitas();
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props} />}
    />
  );
}
export default App;
