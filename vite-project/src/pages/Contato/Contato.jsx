import './Contato.css'
import '../../style/global.css'

export default function Contato() {
  return (
    <div className='container fade-in'>
      <div className='formulario'>
      <div className='mt-2 mb-5 '>

      <p>Conhece algum ponto que poderia fazer parte do acervo ,achou algum erro no acervo ou tem alguma sugestão e/ou feedback para o site? Então entre em contato conosco!</p>
      </div>

        <h4 className='mb-3'>Fale Conosco</h4>
        <label className='form-label'>Nome:</label>
        <input className="form-control mb-2" type="text" />
        <label className='form-label'>Email:</label>
        <input className="form-control mb-2" type="email" />
        <label className='form-label'>Assunto:</label>
        <input className="form-control mb-2" type="text" />
        <label className='form-label'>Mensagem:</label>
        <textarea name="mensagem"className='form-control mb-1' id="mensagem" rows='6'></textarea>

        <button className='btn btn-primary mb-5'>Enviar</button>

      </div>
      
    </div>
  )
}