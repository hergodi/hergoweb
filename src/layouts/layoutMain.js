import React from 'react'
import { Layout } from "antd";
//Para refrescar el token
import { refreshAccessTokenApi, getAccessTokenApi } from "../api/auth";
import { ACCESS_TOKEN } from "../utils/constanst";

//Componentes 
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

//Logos
import { Route, Switch} from 'react-router-dom';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';

import MenuAdminPartidos from '../components/Menu/MenuAdminPartidos'
import MenuHeader from '../components/Menu/MenuHeader'

export default function LayoutAdmin(props) {

    const { routes, history} = props;
    const { Content } = Layout; //Se obtiene el componente hijo de Layout
    
    //Verifica si el usuario existe si no lo redirecciona al login
    //Si existe renderiza el Layout principal
    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/**Se importa el header y se le envía el logo correspondiente */}
            <Header history={history}/>
            <Layout>
                <RefrescaToken history={history}/>
                <Layout className="layout">
                    <Content className="content">
                        {/**Contenido, se iteran las rutas para poder navegar entre ellas */}
                        <LoadRoutes routes={routes} />
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

//Componente utilizado para refrescar token
const RefrescaToken = ({history}) => {
    const { setUser } = useAuth(); 
    console.log('Se revisa token');
    useEffect(()=>{
        const jwt = localStorage.getItem(ACCESS_TOKEN);
        refreshAccessTokenApi(jwt);
        if(!getAccessTokenApi()) {
            history.push("/");
            setUser({});
        }
    })

    return <></>
}