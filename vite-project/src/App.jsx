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
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Inicial/>} />
        <Route path="/pontos/:tipo" element={<Pontos/>}/>
        <Route path="/pontos/:tipo/:subtipo" element={<Pontos/>}/>
        <Route path="/pontos/:tipo/:subtipo/:tercArg" element={<Pontos/>}/>
        <Route path='/geraPDF' element={<GeraPdf></GeraPdf>}></Route>
        <Route path='/contato' element={<Contato></Contato>}></Route>
        
      </Routes>
    <Footer/>
     
    </BrowserRouter>
  
  )
}

export default App
