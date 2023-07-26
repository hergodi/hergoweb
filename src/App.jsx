import { BrowserRouter} from 'react-router-dom';
import 'moment/locale/es'
import LayoutMain from './layouts/LayoutMain';
import RoutesIndex from './components/config/routes';
 
function App() {
  return (
        <LoginLayaout/>
      
  )
}

const LoginLayaout = () => {
  return(
    <>
      <BrowserRouter>
       <LayoutMain />
       <RoutesIndex />
      </BrowserRouter>
    </>
   )
}
 
export default App;
