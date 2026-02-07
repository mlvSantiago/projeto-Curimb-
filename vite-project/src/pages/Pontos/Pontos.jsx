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
                    <div>
                        
                        <p>{p.ponto}</p>

                    </div>
                )

            )
            }
           
        

            
             
        

            <Outlet></Outlet>
        </div>
    )
}