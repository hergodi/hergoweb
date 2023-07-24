import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inicio from './components/pages/inicio/Inicio';
import LayoutMain from "./layouts/LayoutMain";
import { ConfigProvider } from 'antd';
import esES from 'antd/lib/locale/es_ES';
import moment from 'moment';
import 'moment/locale/es'
import routes from "./components/config/routes";
moment.locale('es')
 
function App() {
  return (
        <LoginLayaout/>
      
  )
}

const LoginLayaout = () => {
  return(
    <>
      <BrowserRouter>
        <Switch>           
            {routes.map((route, i) => (
              <RoutesWithSubRoutes key={i} {...route} />
            ))}
        </Switch>
      </BrowserRouter>
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
