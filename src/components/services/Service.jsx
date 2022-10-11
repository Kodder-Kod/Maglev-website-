import React from 'react'
import './services.scss'

import Pic from './../../assets/app-development (1).png'   
import Pic2 from './../../assets/predictive-chart.png'
import Pic3 from './../../assets/web-development (1).png'
import Pic4 from './../../assets/owner.png'
import Pic5 from './../../assets/blocks.png'
import Pic6 from './../../assets/computer.png'
import Pic7 from './../../assets/learning.png'
import Pic8 from './../../assets/support.png'



const service = () => {
    return (
        <section id='services1'>
            <div className='services-title'>
                <h5> What We Offer</h5>
                <h1>Services</h1>
            </div>

            <div className='services_container'>

                <article className='services'>
                    <div className='service_head'>
                        <div className='s-image'>
                            <img src={Pic} alt='image' />
                        </div>
                        <h3>UI/UX Design Mobile and  Web  </h3>
                    </div>
                  
                </article>


                <article className='services'>
                    <div className='service_head'>
                        <div className='s-image'>
                            <img src={Pic2} alt='image' />
                        </div>
                        <h3>Data Analysis ,Science and Data Management</h3>
                    </div>
                  
                </article>


                <article className='services'>
                    <div className='service_head'>
                        <div className='s-image'>
                            <img src={Pic3} alt='image' />
                        </div>
                        <h3>Web and Mobile Development </h3>
                    </div>
                 
                </article>

                <article className='services'>
                    <div className='service_head'>
                        <div className='s-image'>
                            <img src={Pic4} alt='image' />
                        </div>
                        <h3>Custom Management Systems</h3>
                    </div>
                  
                </article>

                <article className='services'>
                    <div className='service_head'>
                        <div className='s-image'>
                            <img src={Pic5} alt='image' />
                        </div>
                        <h3>Computer Security & BlockChain Tech</h3>
                    </div>
                  
                </article>

                <article className='services'>
                    <div className='service_head'>
                        <div className='s-image'>
                            <img src={Pic6} alt='image' />
                        </div>
                        <h3>Routing & Hardware Services </h3>
                    </div>
                  
                </article>

                <article className='services'>
                    <div className='service_head'>
                        <div className='s-image'>
                            <img src={Pic7} alt='image' />
                        </div>
                        <h3>AI and Machine Learning </h3>
                    </div>
                  
                 
                </article>

                <article className='services'>
                    <div className='service_head'>
                        <div className='s-image'>
                            <img src={Pic8} alt='image' />
                        </div>
                        <h3>Help-Desktop Services </h3>
                    </div>
                  
                </article>

            </div>

        </section>


    )
}

export default service