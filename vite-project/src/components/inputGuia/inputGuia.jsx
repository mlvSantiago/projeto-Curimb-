
import './inputGuia.css'

export default function InputGuia({linhaGuia}){

    return(
        <div className="container container-input">

            <label className='label-principal'>Nome do(a) {linhaGuia} do(a) Comandante:</label>
            <input type="text" className='input-nomeGuia' />

        </div>
    )

}