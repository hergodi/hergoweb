import React from 'react'
import { Layout } from "antd";
//Para refrescar el token
//import { refreshAccessTokenApi, getAccessTokenApi } from "../api/auth";
import { ACCESS_TOKEN } from './../components/utils/constanst';

//Componentes 
import Header from './../components/header/Header';
import Footer from './../components/footer/Footer';

//Logos
import { Route, Switch} from 'react-router-dom';
import { useEffect } from 'react';
import Inicio from '../components/pages/inicio/Inicio';

//import MenuAdminPartidos from '../components/Menu/MenuAdminPartidos'
//import MenuHeader from '../components/Menu/MenuHeader'

export default function LayoutMain(props) {

    const { routes, history} = props;
    const { Content } = Layout; //Se obtiene el componente hijo de Layout
    
    //Verifica si el usuario existe si no lo redirecciona al login
    //Si existe renderiza el Layout principal
    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/**Se importa el header y se le envía el logo correspondiente */}
            <Header history={history}/>
            <Layout>
                <Layout className="layout">
                    <Content className="content">
                        {/**Contenido, se iteran las rutas para poder navegar entre ellas <LoadRoutes routes={routes} />*/}
                        <Switch>
                            <Route path="/" render= { Inicio }/>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
            {/**Footer con la versión del sistema */}
            <Footer version="Versión 1.0" anio="2022" />
        </Layout> 
    )

}

//Función que itera las rutas individualmente 
function LoadRoutes({ routes }) {
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    );
}