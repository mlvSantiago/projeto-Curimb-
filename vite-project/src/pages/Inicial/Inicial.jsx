import './Inicial.css'
import '../../style/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'; 
import minhaImagem from '../../assets/img/curimbaSefa.png';

//Imagem Orixas
import Oxala from '../../assets/img/Orixas/Oxala.jpeg';
import Oxossi from '../../assets/img/Orixas/Oxossi.jpeg';
import Xango from '../../assets/img/Orixas/Xangô.jpeg';
import Iemanja from '../../assets/img/Orixas/Yemanja.jpeg';
import Iansã from '../../assets/img/Orixas/Iansa.jpeg';
import Oxum from '../../assets/img/Orixas/Oxum.jpeg';  
import Oxumare from '../../assets/img/Orixas/Oxumare.jpeg';

import Nanã from '../../assets/img/Orixas/Nana.jpeg';  
import Ogum from '../../assets/img/Orixas/Ogum.jpeg';
import Exu from '../../assets/img/Orixas/Exu.jpeg';




import { Link } from 'react-router-dom';

export default function Inicial() {
  const irradiação = 170;
  const louvacao = 200;
  const defumacao = 50;
  const qtPontos = irradiação + louvacao + defumacao;

  const orixas = [
    { nome: 'Oxalá', imagem: Oxala },
    { nome: 'Oxossi', imagem: Oxossi },
    { nome: 'Ogum', imagem: Ogum },
    { nome: 'Iemanjá', imagem: Iemanja },
    { nome: 'Oxum', imagem: Oxum },
    { nome: 'Oxumaré', imagem: Oxumare },
    { nome: 'Iansã', imagem: Iansã },
    { nome: 'Nanã', imagem: Nanã },
    { nome: 'Xangô', imagem: Xango },
    { nome: 'Povo Trabalhador', imagem: Exu },
  ];



  const navigate = useNavigate();

  // useEffect garante que o elemento so sera pego depois de carregado na tela
  useEffect(() => {
    const elements = document.querySelectorAll('.hidden');
    
    // Intersection Observer para observar o elemento, avisa quando ele entrar na viewport
    const myObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show'); // Adiciona a classe 'show' quando o elemento entra na viewport
       
        } else {
          entry.target.classList.remove('show'); // Remove a classe 'show' quando o elemento sai da viewport
        }
      });
    });
    
    elements.forEach((el) => {
      myObserver.observe(el); // Observar cada elemento
    });

    // Cleanup: desconecta o observer quando o componente for desmontado
    return () => {
      myObserver.disconnect();
    };
  }, []); // Array vazio significa que executa apenas uma vez após a montagem

  return (
    <div className='fundo-inicial hidden'>
      <div className='container margens'>
        <div className='mb-5 mt-5 '>
          <h1 className='mb-3'>
            Tecnologia a serviço do sagrado
            <br />
            Sem substituir a vivência do terreiro
          </h1>
          <p className='mb-3'>
            Organização e preservação de pontos com respeito a tradição e ancestralidade
          </p>
       
        </div>

      {/* Imagens clicaveis*/ }
      
        <div className="galeria-orixas">
        {orixas.map((orixa, index) => (
          <Link 
            key={index} 
            to="/pontos" 
            className="card-orixa"
          >
            <img src={orixa.imagem} alt={orixa.nome} />
            <h3>{orixa.nome}</h3>
          </Link>
        ))}
      </div>

        <div className='card card-estilo hidden'>
          <h2 className='mb-3'>O que é o Curimbã?</h2>
          <p>O Curimbã é um espaço dedicado à preservação, ao estudo e à vivência do sagrado através da Curimba. <br></br>
            Mais do que um simples acervo de pontos cantados cheios de força e fundamento para nossas giras, o site nasce com o propósito de auxiliar e fortalecer o aprendizado daqueles que trilham o caminho da Curimba, seja por devoção, estudo ou formação dentro da escola de curimba.<br></br>
            Aqui, o aprendizado é entendido como parte essencial do fazer religioso: aprender a cantar, compreender o fundamento dos pontos, respeitar suas linhas e reconhecer sua importância espiritual.<br></br>
            O site reúne mais de {qtPontos} pontos, incluindo pontos de Orixás para defumação, irradiação, passe e louvação, além de pontos das diversas linhas trabalhadas na Umbanda, servindo como apoio contínuo para quem busca conhecimento, prática consciente e preservação da tradição.</p>
          <img src={minhaImagem} alt="Curimba Seara Espiritualista Falangeiros da Aruanda" className='foto-curimba' />

          <p className='mt-3'>
            Curimbã nos lembra que curimba é exercício diário. É compromisso sério que deve ser estudado, assim como a escola de caboclo Mirim nos ensina.
          </p>

          <a href="https://tendaespiritamirim.com.br/institucional/sobre-nos/">
            Conheça a nossa doutrina <i className="bi bi-arrow-right"></i>
          </a>
        </div>

        <div>
          <h2 className='mb-3'>Como Funciona</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse accusamus alias corrupti aliquid laboriosam dolores sequi! Dolorem porro fugiat nostrum id dicta eum minus? Facere velit dolorum minus magni incidunt!</p>
        </div>
      </div>

      {/* Seção Pelos Números */}
      <div className='dados hidden'>
        <div className='grid-container'>
          {/* Coluna Esquerda - Texto */}
          <div className='item'>
            <h2>
              <a id="pelosNumeros">Pelos números,</a>
              <br />
              Alimentando a curimba
            </h2>
            <p>
              Nosso Acervo conta com mais de {irradiação + louvacao + defumacao} pontos catalogados e organizados com respeito à tradição e ancestralidade, preservando a memória sagrada da Umbanda.
            </p>
          </div>

          {/* Coluna Direita - Números */}
          <div className='dados-num'>
            {/* Número Principal */}
            <div className='principal'>
              <span className='numero-destaque'>+{irradiação}</span>
              pontos de irradiação
            </div>

            {/* Números Secundários */}
            <div className='dados-num-secundarios'>
              <div className='sub'>
                <span className='numero-destaque'>+{louvacao}</span>
                pontos de louvação
              </div>

              <div className='sub'>
                <span className='numero-destaque'>+{defumacao}</span>
                pontos de defumação
              </div>
            </div>
          </div>
        </div>

        <button className='btn btn-primary' type="button" onClick={() => navigate('/contato')}>Contribuir com o Acervo</button>
      </div>
    </div>
  )
}