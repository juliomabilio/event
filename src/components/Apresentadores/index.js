import React from 'react'
import './style.css'
import { StaticImage } from "gatsby-plugin-image"

const Apresentadores = () => {
  return (
    <div className='apresentadores'>
            <h2>Apresentadores</h2>
        <div className='row'>
            <div className='card'>
                <StaticImage src='../../images/img01.jpg' placeholder="blurred" alt="imagem do apresentador" className='img'/>
                <div className='cont-card'>
                    <h3>Apresentador</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div> 
            </div>
            <div className='card'>
                <StaticImage src='../../images/img02.jpg' placeholder="blurred" alt="imagem do apresentador" className='img'/>
                <div className='cont-card'>
                    <h3>Apresentador</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div> 
            </div>
            <div className='card'>
                <StaticImage src='../../images/img03.jpg' placeholder="blurred" alt="imagem do apresentador" className='img'/>
                <div className='cont-card'>
                    <h3>Apresentador</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Apresentadores