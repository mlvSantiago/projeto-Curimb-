import { useState, useEffect } from 'react';
import './GeraPdf.css'
import InputGuia from '../../components/inputGuia/inputGuia.jsx'

export default function GeraPdf() {

  const [tipoPdf, setTipoPdf] = useState('');
  const [tipoSessao, setTipoSessao] = useState('');
  const [linha, setLinha] = useState('');
  const [irradiacao,setIrradiacao] = useState('');
  const [louvacao,setLouvacao] = useState('');




    useEffect(() => {
      if (tipoPdf === 'nao') {
        setTipoSessao('');
        setLinha('');
        setIrradiacao('');
        setLouvacao('');
      }
    }, [tipoPdf]);

    const [mostrar,setMostrar] = useState(false)

    useEffect(()=>{
      if(linha!=''){
        setMostrar(true);
      }else{
        setMostrar(false);
      }
    },[linha])

  return (
    <div className='container mt-5 mb-5 fade-in'>
      <div className='container-explicacao'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi amet possimus est. Repellendus rerum iure magni ab omnis cumque provident reprehenderit laboriosam, ea non, nesciunt esse, nisi sit dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores totam mollitia possimus rerum et repudiandae, consequatur vero. Laudantium cumque perspiciatis aut, a atque reiciendis repellat blanditiis omnis ipsa ipsam earum!</p>
      </div>

      <div>
        <p className='mt-5'>Deseja criar um PDF personalizado?</p>

        <div className="tipoPdf">
          <div className='form-check'>
            <input 
              className='form-check-input estilo-radio' 
              type="radio" 
              name="tipoPdf" 
              value="sim" 
              id="sim"
              onChange={(e) => setTipoPdf(e.target.value)}
            />
            <label htmlFor="sim">Sim</label>
          </div>
          <div className='form-check'>
            <input 
              className='form-check-input estilo-radio' 
              type="radio" 
              name="tipoPdf" 
              value="nao" 
              id="nao"
              onChange={(e) => setTipoPdf(e.target.value)}
            />
            <label htmlFor="nao">Não</label>
          </div>
        </div>
      </div>

      {tipoPdf === 'sim' ? (
        <>
        <div className='container-radio  fade-in'>
          <h4 className='mt-5'>Tipos de sessões</h4>
          <div className='form-check'>
            <input 
            className='form-check-input estilo-radio' 
            type="radio" 
            name="tipoSessao" 
            value="consulta" 
            id="consulta" 
            onChange={(e) => setTipoSessao(e.target.value)} 
            />
            <label htmlFor="consulta">Consulta</label>
          </div>
          <div className='form-check'>
            <input 
            className='form-check-input estilo-radio' 
            type="radio" 
            name="tipoSessao" 
            value="louvacao" 
            id="festiva" 
            onChange={(e) => setTipoSessao(e.target.value)}
            />
            <label htmlFor="festiva">Louvação</label>
          </div>
          <div className='form-check'>
            <input 
            className='form-check-input estilo-radio' 
            type="radio" 
            name="tipoSessao" 
            value="mensal" 
            id="mensal" 
            onChange={(e) => setTipoSessao(e.target.value)}
            />
            <label htmlFor="mensal">Mensal</label>
          </div>
          <div className='form-check'>
            <input 
            className='form-check-input estilo-radio' 
            type="radio" 
            name="tipoSessao" 
            value="passe" 
            id="passe" 
            onChange={(e) => setTipoSessao(e.target.value)}
            />
            <label htmlFor="passe">Passe/Irradiação</label>
          </div>
        </div>
        
        {/*TRATA SESSOES DE PASSE E CONSULTA*/ }
        {tipoSessao === 'passe' || tipoSessao === 'consulta'?(
          <div className="container-radio fade-in">
            <h4 className="mt-5">Linha de Trabalho</h4>
            <div className="form-check">
              <input 
              type="radio" 
              className="form-check-input estilo-radio"
              name='linha'
              value='caboclo'
              id='caboclo'
              onChange={(e) => setLinha(e.target.value)}
              />
              <label htmlFor="caboclo">Caboclos</label>
              
            </div>
            <div className="form-check">
              <input 
              type="radio" 
              className="form-check-input estilo-radio"
              name='linha'
              value='exu'
              id='exu'
              onChange={(e) => setLinha(e.target.value)}
              />
              <label htmlFor="exu">Exu</label>
              
            </div>
            <div className="form-check">
              <input 
              type="radio" 
              className="form-check-input estilo-radio"
              name='linha'
              value='ibejada'
              id='ibejada'
              onChange={(e) => setLinha(e.target.value)}
              />
              <label htmlFor="ibejada">Ibejada</label>
              
            </div>
            <div className="form-check">
              <input 
              type="radio" 
              className="form-check-input estilo-radio"
              name='linha'
              value='pretoVelho'
              id='pretoVelho'
              onChange={(e) => setLinha(e.target.value)}
              />
              <label htmlFor="pretoVelho">Pretos Velhos</label>
              
            </div>

          </div>
        ) : null}
        {/*TRATA TIPO DE IRRADIAÇÃO EM SESSOES DE CABOCLO */}
        {linha === 'caboclo' && (tipoSessao ==='passe' || tipoSessao === 'consulta') ?(
          <div className="container-radio fade-in">
            <h4 className='mt-5'>Tipo Irradiação</h4>
  
            <div className="form-check">
              <input 
              type="radio" 
              className="form-check-input estilo-radio"
              name='irradiacao'
              value='irradiacaoOxossi'
              id='irradiacaoOxossi'
              onChange={(e) => setIrradiacao(e.target.value)}
               />
               <label htmlFor="irradiacaoOxossi">Óxossi</label>
               
            </div>
            
            <div className="form-check">
              <input 
              type="radio" 
              className="form-check-input estilo-radio"
              name='irradiacao'
              value='irradiacaoOgum'
              id='irradiacaoOgum'
              onChange={(e) => setIrradiacao(e.target.value)}
               />
               <label htmlFor="irradiacaoOgum">Ogum</label>
               
            </div>
            <div className="form-check">
              <input 
              type="radio" 
              className="form-check-input estilo-radio"
              name='irradiacao'
              value='irradiacaoIemanja'
              id='irradiacaoIemanja'
              onChange={(e) => setIrradiacao(e.target.value)}
               />
               <label htmlFor="irradiacaoIemanja">Iemanjá / Iabás</label>
               
            </div>
            <div className="form-check">
              <input 
              type="radio" 
              className="form-check-input estilo-radio"
              name='irradiacao'
              value='irradiacaoXango'
              id='irradiacaoXango'
              onChange={(e) => setIrradiacao(e.target.value)}
               />
               <label htmlFor="irradiacaoXango">Xangô</label>
               
            </div>
  
          </div>
  
          
        ): null}
      {/* TRATA LOUVAÇÃO*/ }
      {tipoSessao === 'louvacao'? (
        <div className="container-radio fade-in">
           <h4 className='mt-5'>Louvação a:</h4>

          <div className="form-check">
            <input 
            type="radio" 
            className="form-check-input estilo-radio"
            name='louvacao'
            value='louvacaoOxossi'
            id='louvacaoOxossi'
            onChange={(e) => setLouvacao(e.target.value)}
             />
             <label htmlFor="louvacaoOxossi">Óxossi</label>
             
          </div>
          
          <div className="form-check">
            <input 
            type="radio" 
            className="form-check-input estilo-radio"
            name='louvacao'
            value='louvacaoOgum'
            id='louvacaoOgum'
            onChange={(e) => setLouvacao(e.target.value)}
             />
             <label htmlFor="louvacaoOgum">Ogum</label>
             
          </div>
          <div className="form-check">
            <input 
            type="radio" 
            className="form-check-input estilo-radio"
            name='louvacao'
            value='louvacaoIemanja'
            id='louvacaoIemanja'
            onChange={(e) => setLouvacao(e.target.value)}
             />
             <label htmlFor="louvacaoIemanja">Iemanjá / Iabás</label>
             
          </div>
          <div className="form-check">
            <input 
            type="radio" 
            className="form-check-input estilo-radio"
            name='louvacao'
            value='louvacaoXango'
            id='louvacaoXango'
            onChange={(e) => setLouvacao(e.target.value)}
             />
             <label htmlFor="louvacaoXango">Xangô</label>
             
          </div>


        </div>
      ): null}
        </>
      ) : null}

      {/* COMPONENTE INPUT NOME DO GUIA DO DIRIGENTE*/ }
      {mostrar && <InputGuia linhaGuia = 'Caboclo(a)'></InputGuia>}
      {mostrar && <InputGuia linhaGuia = 'Preto Velho(a)'></InputGuia>}

      {mostrar && linha!='caboclo'&& linha!='pretoVelho'?(
        <>
        {linha === 'ibejada' && <InputGuia linhaGuia = 'Ibejada'></InputGuia> }
        {linha === 'exu' && <InputGuia linhaGuia='Exu/Pomba Gira/ Malandro'></InputGuia>}
        
        </>
      ):null} 
      
    
      <div>
        <button type="button" className='btn btn-primary'>Gerar PDF</button>
      </div>
    </div>
  )
}