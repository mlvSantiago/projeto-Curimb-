import { Outlet, useParams } from "react-router-dom"; //le variaveis da rota

/* importação de estilos*/ 
import './Pontos.css'
import '../../style/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';

/*impotação de dados*/
import infoOrixas from '../../data/pontos/orixas.json' 


export default function Pontos(){
    const {tipo} = useParams();
    const {subtipo} =useParams();

    const orixa = infoOrixas.orixa[tipo];

   
    const pontos = infoOrixas.orixa[tipo].tiposPontos[subtipo]

    console.log(pontos);



  
  

    return(
        <div className="container fade-in">
            {/* Barra de pesquisa */}
            <div className='d-flex justify-content-center '>
                <div className='search-container'>
                    <input 
                        className='input-pesquisa' 
                        type="text" 
                        placeholder="Pesquisar..."
                    />
                    <button className='btn-pesquisa'>
                        <i className="bi bi-search lupa-pesquisa"></i>
                    </button>
                </div>
            </div>
          
            {/*Fundo*/ }
            <div className="saudacao-orixa">
                <div className='teste'>
                    <h1>{orixa.saudacao}</h1>
                    <h4>{orixa.nome}</h4>
                   
                </div>
               
            </div>

            
            {pontos.length == 0? (
                <p>Nenhum ponto encontrado</p>
            ):(

                pontos.map((p) =>
                    <div className="d-flex justify-content-center">

                        <div className ="container-ponto">

                        
                            
                            <p className="small autor-ponto" s>Autor: {p.compositor}</p>
                            <p className="aspas-ponto">"</p>
                            <p className="texto-ponto">{p.ponto}</p>
                            <p className="d-flex justify-content-end aspas-ponto-fim aspas-ponto">"</p>
                            <div className="salvar-ponto d-flex justify-content-end">

                                <button  type="button"><i class="bi bi-bookmark icone-salvar-ponto"></i></button>
                            </div>

                        </div>
                    </div>
                )

            )
            }
           
        

            
             
        

            <Outlet></Outlet>
        </div>
    )
}