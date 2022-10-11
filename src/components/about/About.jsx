import React from 'react'
import './About.scss'
import Pic from './../../assets/smart-farming (2).png'
import { BiAward } from 'react-icons/bi'
import { IoIosPeople } from 'react-icons/io'
import { FaNetworkWired } from 'react-icons/fa'


const data = [
    {
        icon: <BiAward />,
        exp: 'Experience',
        working: '3 + years',
    },
    {
        icon: <IoIosPeople />,
        exp: 'Clients',
        working: '10+ Satisfied',
    },
    {
        icon: <FaNetworkWired />,
        exp: ' Projects',
        working: '5 + Running',
    },
]
const item = [
    {
        para: 'We transform businesses with innovative custom software applications design and development. Our software development experts manage an end-to-end development lifecycle from application UI/UX design, coding, testing, deployment, and support'
    }
]




const about1 = () => {
    return (

        <section id='about' className='about-section'>
        <div className='abt'>
            <div className='about'>
            <h3>Get to Know the company</h3>
            <h1>About  us </h1>
            </div>
            
            
            <div className='about_container'>
                <div className='about_me'>
                    <div className="about_me-image">
                        <img src={Pic} alt='about Image' />
                    </div>
                </div>
             
                <div className='about_content'>
                    <div className='about_cards'>
                        {
                            data.map(({ icon, exp, working }) => {

                                return (
                                    <article className='about_card'>
                                        <a className='about_icon'>{icon}</a>
                                        <h5>{exp}</h5>
                                        <small>{working}</small>
                                    </article>
                                )
                            })
                        }
                    </div>{
                        item.map(({ para }) => {
                            return (

                                <p>{para} </p>
                            )
                        })
                    }
                    <a href=' #contact' className='btn btn-primary'>Lets talk</a>
                </div>
            </div>
            
            </div>

        </section>


    )
}

export default about1