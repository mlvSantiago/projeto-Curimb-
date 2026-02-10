import { Outlet, useParams } from "react-router-dom"; //le variaveis da rota

/* importação de estilos*/ 
import './Pontos.css'
import '../../style/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';

/*impotação de dados*/
import info from '../../data/pontos/orixas.json' 


export default function Pontos(){
    const {tipo} = useParams();
    const {subtipo} =useParams();
    const {tercArg} = useParams();



    let pontos;
    let orixa;

    if(tipo==='orixa'){
           console.log("tipo ",tipo);
       
        if(subtipo!="" && subtipo !== undefined ){

            orixa = info.orixa[subtipo];
            console.log("ORIXA: " ,orixa);

            if(tercArg && tercArg !== ""){
                pontos = orixa.tiposPontos[tercArg];
                console.log("PONTOS " + tercArg.toUpperCase() + "\n" + pontos);
          

            }else{ 
                // se nao for especificado um tipo de ponto será apresentado todos os pontos daquele orixa
              
               pontos = [
                ...orixa.tiposPontos["defumacao"],
                ...orixa.tiposPontos["firmeza"],
                ...orixa.tiposPontos["louvacao"],
                ...orixa.tiposPontos["passeIrradiacao"],
                ...orixa.tiposPontos["transicao"]
            ];

                console.log("TODOS PONTOS DE " + subtipo.toUpperCase() + ":\n", pontos);
            }
        }
    }else if(tipo==='linha'){
        
        if(subtipo!=""){
            const linha = info.linha[subtipo];

            if(tercArg!=""){
                
            }else{
                
            }
        }
    }

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

    
      

        {tipo === 'orixa' && orixa ? (
            <>
                {/*Fundo*/} 
                <div className="saudacao-orixa">
                    <div className='teste'>
                        <h1>{orixa.saudacao}</h1>
                        <h4>{orixa.nome}</h4>
                    </div>
                </div>
                

                {/*Exibição dos pontos*/}
                {pontos && pontos.map((p, index) => (
                    <div key={index} className="d-flex justify-content-center">
                        <div className="container-ponto">
                            <p className="small autor-ponto">Autor: {p.compositor}</p>
                            <p className="aspas-ponto">"</p>
                            <p className="texto-ponto">{p.ponto}</p>
                            <p className="d-flex justify-content-end aspas-ponto-fim aspas-ponto">"</p>
                            <div className="salvar-ponto d-flex justify-content-end">
                                <button type="button">
                                    <i className="bi bi-bookmark icone-salvar-ponto"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        ) : (
            <p>entidade</p>
        )}

        <Outlet></Outlet>
    </div>
)
}