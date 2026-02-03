import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import '../../style/global.css'

export default function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg estilo-navbar fade-in fixed-top">
            <div className="container">
                {/* Logo */}
                <NavLink to="/" className="navbar-brand logo-brand">
                    Curimbã
                </NavLink>
                
                {/* Botão hamburger para mobile */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu de navegação */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav ms-auto d-flex gap-2 align-items-center">
                        {/* Dropdown de Pontos */}
                        <div className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle nav-link-custom" 
                                href="#" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                Pontos
                            </a>
                            <ul className="dropdown-menu dropdown-custom">
                                <li>
                                    <NavLink to="/pontos" className="dropdown-item">
                                        <span className="dropdown-icon">📚</span>
                                        Todos os Pontos
                                    </NavLink>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <NavLink to="/pontos" className="dropdown-item">
                                        <span className="dropdown-icon">✨</span>
                                        Irradiação
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/pontos" className="dropdown-item">
                                        <span className="dropdown-icon">🙏</span>
                                        Louvação
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/pontos" className="dropdown-item">
                                        <span className="dropdown-icon">🌿</span>
                                        Defumação
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        
                        <NavLink to="/geraPDF" className="nav-link nav-link-custom">
                            Gerar PDF
                        </NavLink>
                        
                        <NavLink to="/contato" className="nav-link nav-link-cta">
                            Contato
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}