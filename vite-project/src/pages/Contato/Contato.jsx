import './Contato.css'
import '../../style/global.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contato() {
  const formRef = useRef(null)
  const [aviso, setAviso] = useState("")
  const [erros, setErros] = useState({})


  function handleSubmit(e) {
    e.preventDefault()

    const form = formRef.current
    const nome = form.nome.value.trim()
    const email = form.email.value.trim()
    const assunto = form.assunto.value.trim()
    const mensagem = form.mensagem.value.trim()

    const novosErros = {}
    if (!nome) novosErros.nome = true
    if (!email) novosErros.email = true
    if (!assunto) novosErros.assunto = true
    if (!mensagem) novosErros.mensagem = true


    const status = document.querySelector("#aviso");

    setErros(novosErros)

    if (Object.keys(novosErros).length > 0) {
      setAviso("Preencha todos os campos!")
      return
    }

    setAviso("")
   
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {

      form.reset()
      setErros({})
      status.classList.add("aviso");
      setAviso("Mensagem enviada com sucesso!")
    })
    .catch((error) => {
      console.error(error)
      status.classList.add("avisoErro");
      setAviso("Erro ao enviar. Tente novamente.")
    })
  }

  return (
    <div className='container fade-in'>
      <div className='formulario'>
        <div className='mt-2 mb-5'>
          <p>Conhece algum ponto que poderia fazer parte do acervo, achou algum erro no acervo ou tem alguma sugestão e/ou feedback para o site? Então entre em contato conosco!</p>
        </div>

        <form className="form-contato" ref={formRef} onSubmit={handleSubmit}>
          <h4 className='mb-3'>Fale Conosco</h4>

          <label className='form-label'>Nome:</label>
          <input name="nome" id="nome" className={`form-control mb-2 ${erros.nome ? 'is-invalid' : ''}`} type="text" />

          <label className='form-label'>Email:</label>
          <input name="email" id="email" className={`form-control mb-2 ${erros.email ? 'is-invalid' : ''}`} type="email" />

          <label className='form-label'>Assunto:</label>
          <input name="assunto" id="assunto" className={`form-control mb-2 ${erros.assunto ? 'is-invalid' : ''}`} type="text" />

          <label className='form-label'>Mensagem:</label>
          <textarea name="mensagem" id="mensagem" className={`form-control mb-1 ${erros.mensagem ? 'is-invalid' : ''}`} rows='6'></textarea>


          <p id="aviso" className="">{aviso}</p>

          <button type="submit" className='btn btn-primary mb-5 botaoEnviar'>Enviar</button>
        </form>
      </div>
    </div>
  )
}