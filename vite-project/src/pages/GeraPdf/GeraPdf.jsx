import { useState } from 'react';
import './GeraPdf.css'

export default function GeraPdf() {

  const [tipoPdf, setTipoPdf] = useState('');

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
        <div className='container-radio tiposSessoes fade-in'>
          <h4 className='mt-5'>Tipos de sessões</h4>
          <div className='form-check'>
            <input className='form-check-input estilo-radio' type="radio" name="tipoSessao" value="consulta" id="consulta" />
            <label htmlFor="consulta">Consulta</label>
          </div>
          <div className='form-check'>
            <input className='form-check-input estilo-radio' type="radio" name="tipoSessao" value="festiva" id="festiva" />
            <label htmlFor="festiva">Festiva</label>
          </div>
          <div className='form-check'>
            <input className='form-check-input estilo-radio' type="radio" name="tipoSessao" value="mensal" id="mensal" />
            <label htmlFor="mensal">Mensal</label>
          </div>
          <div className='form-check'>
            <input className='form-check-input estilo-radio' type="radio" name="tipoSessao" value="passe" id="passe" />
            <label htmlFor="passe">Passe/Irradiação</label>
          </div>
        </div>
      ) : null}

      <div>
        <button type="button" className='btn btn-primary'>Gerar PDF</button>
      </div>
    </div>
  )
}