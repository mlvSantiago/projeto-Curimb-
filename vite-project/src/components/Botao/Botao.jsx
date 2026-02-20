import './Botao.css'

function rolaInicio() {
  window.scrollTo(0, 0);
}

export default function Botao() {
  return (
    <div className='posicao-btn'>
      <button className='btn btn-primary botao' type="button" onClick={rolaInicio}>
        <i className="bi bi-chevron-up"></i>
      </button>
    </div>
  )
}