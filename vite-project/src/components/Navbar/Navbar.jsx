import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import '../../style/global.css'

export default function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark estilo-navbar fade-in">
            <div className="container">
                <NavLink to="/" className="navbar-brand">Curimbã</NavLink>
                
                
                <div className="navbar-nav mx-auto d-flex gap-5 container-navbar ">
                    <NavLink to="/pontos" className="nav-link">Pontos</NavLink>
                    <NavLink to="/geraPDF" className="nav-link">Gerar PDF</NavLink>
                    <NavLink to="/contato" className="nav-link">Contato</NavLink>
                </div>
            </div>
        </nav>
    )
}