import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
//Rotas
import Inicial from './pages/Inicial/Inicial.jsx'
import Pontos from './pages/Pontos/Pontos.jsx'
import GeraPdf from './pages/GeraPdf/GeraPdf.jsx'
import Contato from './pages/Contato/Contato.jsx'

//Componentes
import Navbar from './components/Navbar/Navbar.jsx'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Inicial/>} />
        <Route path="/pontos" element={<Pontos></Pontos>}></Route>
        <Route path='/geraPDF' element={<GeraPdf></GeraPdf>}></Route>
        <Route path='/contato' element={<Contato></Contato>}></Route>
        
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
