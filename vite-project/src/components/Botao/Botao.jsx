import { useEffect, useRef } from 'react'
import './Botao.css'

function rolaInicio() {
  window.scrollTo(0, 0);
}

export default function Botao() {
  const botaoRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (!botaoRef.current) return;
      
      if (window.scrollY <= 600) {
        botaoRef.current.classList.add("invisivel");
      } else {
        botaoRef.current.classList.remove("invisivel");
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // cleanup
  }, []);

  return (
    <div className='posicao-btn'>
      <button ref={botaoRef} className='btn btn-primary botao' type="button" onClick={rolaInicio}>
        <i className="bi bi-chevron-up"></i>
      </button>
    </div>
  )
}