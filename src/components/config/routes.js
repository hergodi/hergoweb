//Layout
//Se creo un Layout principal para que solo se manden a llamar las paginas y muestren su contenido
import LayoutMain from '../../layouts/LayoutMain';
import Inicio from './../pages/inicio/Inicio';
//Se crea un array con todas las rutas a utilizar 
const routes = [
    {
        path: "/",
        component: LayoutMain,
        exact: false,
        routes: [
            {
                path: ["/inicio"],
                component: Inicio,
                exact: true
            },
        ]
    }

];

export default routes;