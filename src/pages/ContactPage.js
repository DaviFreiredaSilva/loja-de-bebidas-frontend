import React from 'react'

export default function ContactPage() {
    return (
        <div className='p-4'>
            <h2 className='text-start mb-4'>CONTATO</h2>
            <div className='d-flex flex-column justify-content-start col-4'>
                
            <input type="text" className='form-control mb-3' placeholder='Nome:'/>
            <input type="email" className='form-control mb-3' placeholder='Email:'/>
            <input type="text" className='form-control mb-3' placeholder='Telefone:'/>
            <textarea type="text" className='form-control mb-3' placeholder='Mensagem:'/>
            <button className='btn btn-outline-dark col-3 mt-3'>Enviar</button>
            </div>
        </div>
    )
}
