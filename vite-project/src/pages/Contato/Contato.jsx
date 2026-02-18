import './Contato.css'
import '../../style/global.css'

function verificaFormulario(e) {

  e.preventDefault();
  
  let nome = document.querySelector("#nome");
  let email = document.querySelector("#email");
  let assunto = document.querySelector("#assunto");
  let mensagem = document.querySelector("#mensagem");
  
  let aviso = document.querySelector(".aviso");
  
  let contador = 0;
  
  let botao = document.querySelector(".btn");
  
  if(nome.value === ""){
    nome.classList.add("is-invalid");
    contador++;

  }else{
    nome.classList.remove("is-invalid");
    
    
  }
  if(email.value === ""){
    email.classList.add("is-invalid");
    contador++;
   

  }
  else{
    email.classList.remove("is-invalid");
   
  }
  if(assunto.value === ""){
    assunto.classList.add("is-invalid");
     contador++;

  }else{
    assunto.classList.remove("is-invalid");

  }
  if(mensagem.value === ""){
    mensagem.classList.add("is-invalid");
    contador++;

  }else{

    mensagem.classList.remove("is-invalid");
    
  }

  if(contador!=0){
    aviso.innerHTML = "Preencha todos os campos!";
    
  }else{
 

    aviso.innerHTML="";
  }



}



export default function Contato() {
  


  return (
    <div className='container fade-in'>
      <div className='formulario'>
      <div className='mt-2 mb-5 '>

      <p>Conhece algum ponto que poderia fazer parte do acervo ,achou algum erro no acervo ou tem alguma sugestão e/ou feedback para o site? Então entre em contato conosco!</p>
      </div>
      <form onSubmit={verificaFormulario}>

          <h4 className='mb-3'>Fale Conosco</h4>
          <label  className='form-label'>Nome:</label>
          <input id ="nome" className="form-control mb-2" type="text"  />
          <label className='form-label'>Email:</label>
          <input id ="email" className="form-control mb-2" type="email" />
          <label className='form-label'>Assunto:</label>
          <input id = "assunto" className="form-control mb-2" type="text" />
          <label className='form-label'>Mensagem:</label>
          <textarea id="mensagem" name="mensagem"className='form-control mb-1'  rows='6'></textarea>
          <p class="aviso"></p>

          <button type="submit" className='btn btn-primary mb-5 botaoEnviar ' >Enviar</button>

      </form>

      </div>
      
    </div>
  )
}