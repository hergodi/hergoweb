import { BrowserRouter} from 'react-router-dom';
import 'moment/locale/es'
import LayoutMain from './layouts/LayoutMain';
import RoutesIndex from './components/config/routes';
 
function App() {
  return (
    <>
    
      <BrowserRouter>
        <LayoutMain>
          <RoutesIndex />
        </LayoutMain>   
      </BrowserRouter>
    </>
        
      
  )
}
 
export default App;
