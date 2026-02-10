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
                                    <li><NavLink to="/pontos/orixa/oxala/defumacao">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/oxala/firmeza">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/oxala/louvacao">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/oxala/passeIrradiacao">Passe/ Irradiação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/oxala/transicao">Transição</NavLink></li>
                                </ul>
                              </li>
                                 <li className="submenu-item">
                                <span>Óxossi ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos/orixa/oxossi/defumacao">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/oxossi/firmeza">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/oxossi/louvacao">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/oxossi/passeIrradiacao">Passe/ Irradiação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/oxossi/transicao">Transição</NavLink></li>
                                </ul>
                            </li>
                                 <li className="submenu-item">
                                <span>Ogum ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos/orixa/ogum/defumacao">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/ogum/firmeza">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/ogum/louvacao">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/ogum/passeIrradiacao">Passe/ Irradiação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/ogum/transicao">Transição</NavLink></li>
                                </ul>
                            </li>

                         
                            <li className="submenu-item">
                                <span>Iemanjá ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos/orixa/iemanja/defumacao">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/iemanja/firmeza">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/iemanja/louvacao">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/iemanja/passeIrradiacao">Passe/ Irradiação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/iemanja/transicao">Transição</NavLink></li>
                                </ul>
                            </li>

                              <li className="submenu-item">
                                <span>Oxum ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos/orixa/oxum/defumacao">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/oxum/firmeza">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/oxum/louvacao">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/oxum/passeIrradiacao">Passe/ Irradiação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/oxum/transicao">Transição</NavLink></li>
                                </ul>
                            </li>
                              <li className="submenu-item">
                                <span>Oxumaré ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos/orixa/oxumare/defumacao">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/oxumare/firmeza">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/oxumare/louvacao">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/oxumare/passeIrradiacao">Passe/ Irradiação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/oxumare/transicao">Transição</NavLink></li>
                                </ul>
                            </li>
                              <li className="submenu-item">
                                <span>Iansã ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos/orixa/iansa/defumacao">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/iansa/firmeza">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/iansa/louvacao">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/iansa/passeIrradiacao">Passe/ Irradiação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/iansa/transicao">Transição</NavLink></li>
                                </ul>
                            </li>
                              <li className="submenu-item">
                                <span>Nanã ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos/orixa/nana/defumacao">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/nana/firmeza">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/nana/louvacao">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/nana/passeIrradiacao">Passe/ Irradiação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/nana/transicao">Transição</NavLink></li>
                                </ul>
                            </li>
                             
                              <li className="submenu-item">
                                <span>Xangô ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos/orixa/xango/defumacao">Defumação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/xango/firmeza">Firmeza</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/xango/louvacao">Louvação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/xango/passeIrradiacao">Passe/ Irradiação</NavLink></li>
                                    <li><NavLink to="/pontos/orixa/xango/transicao">Transição</NavLink></li>
                                </ul>
                            </li>
                            <hr className="menu-separator"></hr>
                            <li>
                                <NavLink to="/pontos/linha/boiadeiros">Boiadeiros</NavLink>
                            </li>
                             <li>
                                <NavLink to="/pontos/linha/caboclos">Caboclos</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pontos/linha/caboclos/cabocloMirim">Caboclo Mirim</NavLink>
                            </li>
                        
                            <li>
                                <NavLink to="/pontos/linha/ibejada">Ibejada</NavLink>
                            </li>
                            
                               <li className="submenu-item">
                                <span>Iofá ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos/linha/iofa/congo">Congo</NavLink></li>
                                    <li><NavLink to="/pontos/linha/angola">Angola</NavLink></li>
                                    <li><NavLink to="/pontos/linha/luanda">Luanda</NavLink></li>
                                    <li><NavLink to="/pontos/linha/bahia">Bahia</NavLink></li>
                                    <li><NavLink to="/pontos/linha/carreiro">Carreiro</NavLink></li>
                                    <li><NavLink to="/pontos/linha/minas">Minas</NavLink></li>
                                    <li><NavLink to="/pontos/linha/cativeiro">Cativeiro</NavLink></li>
                                    <li><NavLink to="/pontos/linha/almas">Almas</NavLink></li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/pontos/linha/iofa/paiRoberto">Pai Roberto</NavLink>
                            </li>
                               <li className="submenu-item">
                                <span>Povo Trabalhador ▸</span>

                                <ul className="submenu-list">
                                    <li><NavLink to="/pontos/linha/povoTrabalhador/exu">Exu</NavLink></li>
                                    <li><NavLink to="/pontos/linha/povoTrabalhador/pombaGira">Pomba Gira</NavLink></li>
                                    <li><NavLink to="/pontos/linha/povoTrabalhador/malandragem">Malandragem</NavLink></li>
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