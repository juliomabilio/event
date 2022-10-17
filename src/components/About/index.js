import React from 'react'
import './style.css'

const About = () => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='row'>
        <div className='missão'>
          <h2>Nossa missão</h2>
          <p> Congregar todos os profissionais de ICT e outros membros 
            da comunidade técnica e de investigação a fim de partilharem e trocarem as melhores
            práticas para a implementação de novas tecnologias ou protocolos.
          </p>
        </div>
        <div className='visão'>
          <h2>Nossa visão</h2>
          <p> Capacitar quadros do sector de ITC em Angola, bem como auxiliar 
            estudantes e proficionais que planeiam desemvolver carreiras futuras
             na área de TICs e agregar valor aos seus conhecimentos sobre o seu sector de actuação.
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About;