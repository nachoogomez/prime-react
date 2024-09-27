import './Contact.css'
import { InputText } from "primereact/inputtext";

import { Button } from 'primereact/button';
        

const Contact = () => {
  return (
    <div className='contact-container'>
      <h2>Contactanos</h2>
        <div className="card flex justify-content-center">
            <InputText keyfilter="int" placeholder="Nombre" />
        </div>
        <div className="card flex justify-content-center">
            <InputText keyfilter="int" placeholder="Apellido" />
        </div>
        <div className="card flex justify-content-center">
            <InputText keyfilter="int" placeholder="Email" />
        </div>
        <div className="card flex justify-content-center">
            <InputText keyfilter="int" placeholder="Tu consulta" />
        </div>
        <div className="card flex justify-content-center">
            <Button label="Enviar" />
        </div>
    </div>
  )
}

export default Contact