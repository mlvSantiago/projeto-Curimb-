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
                                    <li><NavLink to="/pontos/oxala/defumacao">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos/oxala/firmeza">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos/oxala/louvacao">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos/oxala/passeIrradiacao">Passe/ Irradiação</NavLink></li>
                                    <li><NavLink to="/pontos/oxala/transicao">Transição</NavLink></li>
                                </ul>
                              </li>
                                 <li className="submenu-item">
                                <span>Óxossi ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos/oxossi/defumacao">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos/oxossi/firmeza">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos/oxossi/jurema">Jurema</NavLink></li>
                                    <li><NavLink to="/pontos/oxossi/louvacao">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos/oxossi/passeIrradiacao">Passe/ Irradiação</NavLink></li>
                                    <li><NavLink to="/pontos/oxossi/transicao">Transição</NavLink></li>
                                </ul>
                            </li>
                                 <li className="submenu-item">
                                <span>Ogum ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos/ogum/defumacao">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos/ogum/firmeza">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos/ogum/louvacao">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos/ogum/passeIrradiacao">Passe/ Irradiação</NavLink></li>
                                    <li><NavLink to="/pontos/ogum/transicao">Transição</NavLink></li>
                                </ul>
                            </li>

                         
                            <li className="submenu-item">
                                <span>Iemanjá ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos/iemanja/defumacao">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos/iemanja/firmeza">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos/iemanja/louvacao">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos/iemanja/passeIrradiacao">Passe/ Irradiação</NavLink></li>
                                    <li><NavLink to="/pontos/iemanja/transicao">Transição</NavLink></li>
                                </ul>
                            </li>

                              <li className="submenu-item">
                                <span>Oxum ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos/oxum/defumacao">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos/oxum/firmeza">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos/oxum/louvacao">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos/oxum/passeIrradiacao">Passe/ Irradiação</NavLink></li>
                                    <li><NavLink to="/pontos/oxum/transicao">Transição</NavLink></li>
                                </ul>
                            </li>
                              <li className="submenu-item">
                                <span>Oxumaré ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos/oxumare/defumacao">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos/oxumare/firmeza">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos/oxumare/louvacao">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos/oxumare/passeIrradiacao">Passe/ Irradiação</NavLink></li>
                                    <li><NavLink to="/pontos/oxumare/transicao">Transição</NavLink></li>
                                </ul>
                            </li>
                              <li className="submenu-item">
                                <span>Iansã ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos/iansa/defumacao">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos/iansa/firmeza">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos/iansa/louvacao">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos/iansa/passeIrradiacao">Passe/ Irradiação</NavLink></li>
                                    <li><NavLink to="/pontos/iansa/transicao">Transição</NavLink></li>
                                </ul>
                            </li>
                              <li className="submenu-item">
                                <span>Nanã ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos/nana/defumacao">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos/nana/firmeza">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos/nana/louvacao">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos/nana/passeIrradiacao">Passe/ Irradiação</NavLink></li>
                                    <li><NavLink to="/pontos/nana/transicao">Transição</NavLink></li>
                                </ul>
                            </li>
                             
                              <li className="submenu-item">
                                <span>Xangô ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos/xango/defumacao">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos/xango/firmeza">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos/xango/louvacao">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos/xango/passeIrradiacao">Passe/ Irradiação</NavLink></li>
                                    <li><NavLink to="/pontos/xango/transicao">Transição</NavLink></li>
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
                                <NavLink to="/pontos">Caboclo Mirim</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pontos">Exu</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pontos">Ibejada</NavLink>
                            </li>
                             <li>
                                <NavLink to="/pontos">Iofá</NavLink>
                            </li>
                               <li className="submenu-item">
                                <span>Iofá ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos">Congo</NavLink></li>
                                    <li><NavLink to="/pontos">Angola</NavLink></li>
                                    <li><NavLink to="/pontos">Luanda</NavLink></li>
                                    <li><NavLink to="/pontos">Bahia</NavLink></li>
                                    <li><NavLink to="/pontos">Carreiro</NavLink></li>
                                    <li><NavLink to="/pontos">Minhas</NavLink></li>
                                    <li><NavLink to="/pontos">Cativeiro</NavLink></li>
                                    <li><NavLink to="/pontos">Almas</NavLink></li>
                                </ul>
                            </li>
                               <li className="submenu-item">
                                <span>Povo Trabalhador ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos">Exu</NavLink></li>
                                    <li><NavLink to="/pontos">Pomba Gira</NavLink></li>
                                    <li><NavLink to="/pontos">Malandragem</NavLink></li>
                                </ul>
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