import './Inicial.css'
import '../../style/global.css'
import { useNavigate } from 'react-router-dom';


export default function Inicial() {
  const irradiação = 170;
  const louvacao = 200;
  const defumacao=50;

  const navigate = useNavigate();

  return (
    <div className='fundo-inicial fade-in'>
      <div className='container margens'>
        <div className='mb-5 mt-5'>
          <h1 className='mb-3'>Tecnologia a serviço do sagrado
          <br></br>Sem substituir a vivência do terreiro
          </h1>
          <p className='mb-3 '>Organização e preservação de pontos com respeito a tradição e ancestralidade</p>
          <button className="btn btn-primary" id='verPontos' type='button'
            onClick={()=>navigate('/pontos')}>
            Ver pontos
            </button>
        </div>

        <div className='card card-estilo'>
          <h2 className='mb-3'>O que é o Curimbã?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse accusamus alias corrupti aliquid laboriosam dolores sequi! Dolorem porro fugiat nostrum id dicta eum minus? Facere velit dolorum minus magni incidunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum nesciunt odio, magni suscipit non nihil perspiciatis veniam obcaecati modi molestiae hic porro nisi impedit necessitatibus ad animi quia alias eveniet? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam aliquam voluptatem repellat eaque, nobis pariatur? Dolorum voluptatibus minima quo commodi nostrum excepturi adipisci officiis eum praesentium molestiae. Hic, nihil quibusdam.</p>
          <a href="https://tendaespiritamirim.com.br/institucional/sobre-nos/">Conheça a nossa doutrina <i className="bi bi-arrow-right "></i></a>
        </div>

        <div>
          <h2 className='mb-3'>Como Funciona</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse accusamus alias corrupti aliquid laboriosam dolores sequi! Dolorem porro fugiat nostrum id dicta eum minus? Facere velit dolorum minus magni incidunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum nesciunt odio, magni suscipit non nihil perspiciatis veniam obcaecati modi molestiae hic porro nisi impedit necessitatibus ad animi quia alias eveniet?</p>
        </div>
      </div>

     

        <div className='dados'>
          <div className='grid-container'>

          <div className='item'>
            <h2><a id="pelosNumeros">Pelos números</a> 
            <br />
            Alimentando a curimba</h2>
            <p>Nosso Acervo conta com mais de XXXX pontos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ratione autem fugiat blanditiis veritatis, accusamus saepe laborum eveniet, dolore repellendus dolorem fuga, nulla molestias voluptates dignissimos aliquam vero doloribus beatae?</p>
          </div>
          <div className='dados-num item'>
            <p><a>{irradiação}</a> pontos de irradiação</p>
            <p><a >{louvacao}</a> pontos de louvação</p>
            <p><a>{defumacao}</a> pontos de defumação</p>
          </div>
          </div>
          
          <button className='btn btn-primary'>Contribuir com o Acervo</button>
        </div>
      
    </div>
  )
}