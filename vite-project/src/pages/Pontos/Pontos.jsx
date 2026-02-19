import { Outlet, useParams } from "react-router-dom"; //le variaveis da rota

/* importação de estilos*/ 
import './Pontos.css'
import '../../style/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';

/*impotação de dados*/
import infoOrixa from '../../data/pontos/orixas.json' 
import linhaInfo from '../../data/pontos/linhas.json'


/*importação ferramentas orixas*/
import ofa from '../../assets/img/ferramentas/ofa.png'
import opaxoro from '../../assets/img/ferramentas/opaxoro.png'
import ida from '../../assets/img/ferramentas/ida.png'
import ababeIemanja from '../../assets/img/ferramentas/abebeIemanja.png'
import abebeOxum from "../../assets/img/ferramentas/abebeOxum.png"
import apara from "../../assets/img/ferramentas/apara.png"
import eruexim from "../../assets/img/ferramentas/eruexim.png"
import ibiri from "../../assets/img/ferramentas/ibiri.png"
import  xararae from "../../assets/img/ferramentas/xararae.png"
import oxe from "../../assets/img/ferramentas/oxe.png"

export default function Pontos(){
    const {tipo} = useParams();
    const {subtipo} =useParams();
    const {tercArg} = useParams();
    let tipoPonto;



    let pontos;
    let orixa;
    let ferramenta;

    if(tipo==='orixa'){
           console.log("tipo ",tipo);
       
        if(subtipo!="" && subtipo !== undefined ){

            orixa = infoOrixa.orixa[subtipo];
            console.log("ORIXA: " ,orixa);

            ferramenta = orixa.ferramenta;
            console.log("Ferramenta: ", ferramenta , ofa)

            if(tercArg && tercArg !== ""){
                pontos = orixa.tiposPontos[tercArg];
                console.log("PONTOS " + tercArg.toUpperCase() + "\n" + pontos);

                /*Escreve terceiro argumento com acentos*/
                switch(tercArg){
                    case "defumacao":
                        tipoPonto="Defumação"
                        break;
                    case "firmeza":
                        tipoPonto="Firmeza";
                        break;
                    case "louvacao":
                        tipoPonto="Louvação";
                        break;
                    case "passeIrradiacao":
                        tipoPonto="Passe e Irradição";
                        break;
                    case "transicao":
                        tipoPonto="Transição";
                        break;
                }
          

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
      
        <div className="d-flex justify-content-center">

            <div className="containerTitulo">
                    
                     {ferramenta === 'abebeIemanja' && <img src={ababeIemanja} alt="" className="ferramentaOrixa ferramentaEsq" />}
                     {ferramenta === 'abebeOxum' && <img src={abebeOxum} alt="" className="ferramentaOrixa ferramentaEsq" />}
                     {ferramenta === 'apara' && <img src={apara} alt="" className="ferramentaOrixa ferramentaEsq" />}
                     {ferramenta === 'ida' && <img src={ida} alt="" className="ferramentaOrixa ferramentaEsq" />}
                     {ferramenta === 'ofa' && <img src={ofa} alt="" className="ferramentaOrixa ferramentaEsq" />}
                    {ferramenta === 'opaxoro' && <img src={opaxoro} alt="" className="ferramentaOrixa ferramentaEsq" />}
                     {ferramenta === 'eruexim' && <img src={eruexim} alt="" className="ferramentaOrixa ferramentaEsq" />}
                     {ferramenta === 'ibiri' && <img src={ibiri} alt="" className="ferramentaOrixa ferramentaEsq" />}
                     {ferramenta === 'xararae' && <img src={xararae} alt="" className="ferramentaOrixa ferramentaEsq" />}
                     {ferramenta === 'oxe' && <img src={oxe} alt="" className="ferramentaOrixa ferramentaEsq ferramentaXango" />}


                    <div className="saudacao-orixa">
                        <div className='teste'>
                        <div className="tipoPonto">
                            <h4>{tipoPonto}</h4>
                        </div>
                        <h1>{orixa.saudacao}</h1>
                        <h4>{orixa.nome}</h4>
                        </div>
                    </div>

                    {ferramenta === 'abebeIemanja' && <img src={ababeIemanja} alt="" className="ferramentaOrixa ferramentaDir" />}
                    {ferramenta === 'abebeOxum' && <img src={abebeOxum} alt="" className="ferramentaOrixa ferramentaDir" />}
                    {ferramenta === 'apara' && <img src={apara} alt="" className="ferramentaOrixa ferramentaDir" />}
                    {ferramenta === 'ida' && <img src={ida} alt="" className="ferramentaOrixa ferramentaDir" />}
                    {ferramenta === 'ofa' && <img src={ofa} alt="" className="ferramentaOrixa ferramentaDir" />}
                    {ferramenta === 'opaxoro' && <img src={opaxoro} alt="" className="ferramentaOrixa ferramentaDir" />}
                    {ferramenta === 'eruexim' && <img src={eruexim} alt="" className="ferramentaOrixa ferramentaDir" />}
                    {ferramenta === 'ibiri' && <img src={ibiri} alt="" className="ferramentaOrixa ferramentaDir" />}
                    {ferramenta === 'xararae' && <img src={xararae} alt="" className="ferramentaOrixa ferramentaDir" />}        
                    {ferramenta === 'oxe' && <img src={oxe} alt="" className="ferramentaOrixa ferramentaDir ferramentaXango" />}                  

                </div>
        </div>
        
        

        {/*Exibição dos pontos*/}
        {pontos && pontos.length > 0 ? (
            pontos.map((p, index) => (
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
            ))
        ) : (
            <div className="d-flex flex-column align-items-center">
                <p className="nenhum-ponto text-center">Nenhum ponto disponível nessa seção</p>
             
                <p className="text-center recomendacao-ponto">Conhece algum ponto para essa seção?<br /> <a href="/contato">Entre em contato conosco!</a></p>

            </div>
            
        )}
        </>
        ) : (
            <p>entidade</p>
        )}

        <Outlet></Outlet>
    </div>
)
}