import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
                       <li className="menu-dropdown">
                        <span className="nav-link-custom">Pontos ▾</span>

                        <ul className="menu-dropdown-list">
                                 <li className="submenu-item">
                                <span>Oxalá ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos">Passe/ Irradiação</NavLink></li>
                                </ul>
                              </li>
                                 <li className="submenu-item">
                                <span>Óxossi ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos">Jurema</NavLink></li>
                                    <li><NavLink to="/pontos">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos">Passe/ Irradiação</NavLink></li>
                                </ul>
                            </li>
                                 <li className="submenu-item">
                                <span>Ogum ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos">Passe/ Irradiação</NavLink></li>
                                </ul>
                            </li>

                         
                            <li className="submenu-item">
                                <span>Iemanjá ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos">Passe/ Irradiação</NavLink></li>
                                </ul>
                            </li>

                              <li className="submenu-item">
                                <span>Oxum ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos">Passe/ Irradiação</NavLink></li>
                                </ul>
                            </li>
                              <li className="submenu-item">
                                <span>Oxumaré ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos">Passe/ Irradiação</NavLink></li>
                                </ul>
                            </li>
                              <li className="submenu-item">
                                <span>Iansã ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos">Passe/ Irradiação</NavLink></li>
                                </ul>
                            </li>
                              <li className="submenu-item">
                                <span>Nanã ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos">Passe/ Irradiação</NavLink></li>
                                </ul>
                            </li>
                              <li className="submenu-item">
                                <span>Ibejada ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos">Passe/ Irradiação</NavLink></li>
                                </ul>
                            </li>
                              <li className="submenu-item">
                                <span>Xangô ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos">Passe/ Irradiação</NavLink></li>
                                </ul>
                            </li>
                            <hr className="menu-separator"></hr>
                            <li>
                                <NavLink to="/pontos">Boiadeiros</NavLink>
                            </li>
                             <li>
                                <NavLink to="/pontos">Caboclos</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pontos">Exu</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pontos">Ibejada</NavLink>
                            </li>
                             <li>
                                <NavLink to="/pontos">Pretos Velhos</NavLink>
                            </li>
                        </ul>
                    </li>

                        
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