import React from 'react'
import './port.scss'

import Pic from "./../../assets/pic001.png"
import Pic2 from "./../../assets/pic002.png"
import Pic3 from "./../../assets/pic004.png"
import Pic4 from "./../../assets/pic005.png"
import Pic5 from "./../../assets/pic006.png"
import Pic6 from "./../../assets/pic007.png"


const data = [
    {
        id: 1,
        image: Pic,
        titile: 'the title to be',
        github: 'https:github.com',
        demo: 'https://faceook.com'

    },
    {
        id: 2,
        image: Pic2,
        titile: 'the title to be',
        github: 'https:github.com',
        demo: 'https://faceook.com'

    },
    {
        id: 3,
        image: Pic3,
        titile: 'the title to be',
        github: 'https:github.com',
        demo: 'https://faceook.com'

    },
    {
        id: 4,
        image: Pic4,
        titile: 'the title to be',
        github: 'https:github.com',
        demo: 'https://faceook.com'

    },
    {
        id: 5,
        image: Pic5,
        titile: 'the title to be',
        github: 'https:github.com',
        demo: 'https://faceook.com'

    },



]

const port1 = () => {
    return (
        <section id='port' className='prt'>

            <div className='port_head'>
            <h3>Our Recent Work</h3>
            <h1>Portfolio</h1>
            </div>
        
            <div className='portfolio_container'>
            {
                data.map(({id, image, title, github, demo}) => {

                   return (
                <article key={id} className='port_item'>
                    <div className='port_item-image'>
                        <img src={image}  alt={title}/>
                    </div>
                    <h3>{title}</h3>
                    <div className='port_item-cta'>
                        <a href={github} className='btn btn-primary' target='_blank'>Github</a>
                        <a href={demo} className=' btn btn-primary' target='_blank'>Demo</a>
                    </div>
                </article>
                )
             }
              )
            }
            </div>
            
        </section>

    )
}

export default port1