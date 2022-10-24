import React from 'react'
import './style.css'
import { StaticImage } from "gatsby-plugin-image"

const Colaborador = () => {
  return (
     <div className='colaborador'>
      <div className='container'>
        <div className='titulo'>
          <h2>APRESENTADORES</h2>
        </div>
        <div className='row'>
          <div className='card'>
            <div className='info'>
              <div className='nome'>Nome</div>
              <div className='prof'>Especialidade</div>
              <div className='divider'></div>
              <div className='bio'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <button>Contact</button>
            </div>
            <StaticImage src='../../images/img01.jpg' placeholder="blurred" alt="imagem do apresentador" className='img'/>
            <a href='#'>ESPECIALIDADE</a>
          </div>
          
          <div className='card'>
            <div className='info'>
              <div className='nome'>Nome</div>
              <div className='prof'>Especialidade</div>
              <div className='divider'></div>
              <div className='bio'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <button>Contact</button>
            </div>
            <StaticImage src='../../images/img02.jpg' placeholder="blurred" alt="imagem do apresentador" className='img'/>
            <a href='#'>ESPECIALIDADE</a>
          </div>

          <div className='card'>
            <div className='info'>
              <div className='nome'>Nome</div>
              <div className='prof'>Especialidade</div>
              <div className='divider'></div>
              <div className='bio'>
              Lorem ipsum dolor sit amet, consectetur
               adipiscing elit, sed do eiusmod tempor 
               incididunt ut labore et dolore magna aliqua.
              </div>
              <button>Contact</button>
            </div>
            <StaticImage src='../../images/img03.jpg' placeholder="blurred" alt="imagem do apresentador" className='img'/>
            <a href='#'>ESPECIALIDADE</a>
          </div>

        </div>
        

        </div>
      </div>
  )
}

export default Colaborador;