import { BrowserRouter } from 'react-router-dom'
import 'moment/locale/es'
import LayoutMain from './layouts/LayoutMain.jsx'

function App () {
  return (
    <>
      <BrowserRouter>
        <LayoutMain />
      </BrowserRouter>
    </>

  )
}

export default App
