import React from 'react'
import './Experience.scss'
import { BsPatchCheck } from 'react-icons/bs'



const data = [
    {
        icon: <BsPatchCheck />,
        head: 'Bootstrap',
        exp: 'Experienced',

    },
    {
        icon: <BsPatchCheck />,
        head: 'CSS',
        exp: 'Experienced',

    },
    {
        icon: <BsPatchCheck />,
        head: 'ReactJs and Native',
        exp: 'Experienced',

    },
    {
        icon: <BsPatchCheck />,
        head: 'HTML',
        exp: 'Experienced',

    },
    {
        icon: <BsPatchCheck />,
        head: 'DOM(Document Object Model',
        exp: 'Experienced',

    },
    {
        icon: <BsPatchCheck />,
        head: 'Javascript',
        exp: 'Experienced',

    },
    {
        icon: <BsPatchCheck />,
        head: 'Tkinter',
        exp: 'Experienced',

    },
    {
        icon: <BsPatchCheck />,
        head: 'API (Web View)',
        exp: 'Experienced',

    },

]

const ujumbe = [
    {
        icon: <BsPatchCheck />,
        head: 'SQL',
        exp: 'Experienced',

    },
    {
        icon: <BsPatchCheck />,
        head: 'BlockChain',
        exp: 'Experienced',

    },
    {
        icon: <BsPatchCheck />,
        head: 'Machine learning ',
        exp: 'Experienced',

    },
    {
        icon: <BsPatchCheck />,
        head: 'Open CV',
        exp: 'Experienced',

    },
    {
        icon: <BsPatchCheck />,
        head: 'NodeJs',
        exp: 'Experienced',

    },
    {
        icon: <BsPatchCheck />,
        head: 'Docker',
        exp: 'Experienced',

    },
    {
        icon: <BsPatchCheck />,
        head: 'Python',
        exp: 'Experienced',

    },
    {
        icon: <BsPatchCheck />,
        head: 'Devops(jenkins)',
        exp: 'Experienced',
    },
]


const exp = () => {
    return (

        <section id='experience' >

         <div className='exp'>
                <div className='exp_head'>
                    <h3>Tools We Use</h3>
                    <h1> Experience</h1>
                </div>


                <div className='exp_container'>
                    <div className='expe_front'>
                        <div className="details">
                        <div className='pop'>
                        <h3>FrontEnd Dev</h3>
                        </div>
                       
                        <div className='exp_content'>
                            {
                                data.map(({ icon, head, exp }) => {
                                    return (
                                        <article className='exp_details'>
                                            < a className='experince_details-icon'> {icon}</a>
                                            <h4>{head}</h4>
                                            <small className='text-light'>{exp}</small>
                                        </article>
                                    )
                                })
                            }

                        </div>
                        </div>
                    </div>

                    <div className='expe_back'>
                    <div className="details">

                    <div className='pop'>
                    <h3>BackEnd Dev</h3>
                        </div>
                     
                        <div className='exp_content'>
                            {
                                ujumbe.map(({ icon, head, exp }) => {
                                    return (
                                        <article className='exp_details'>
                                            <a className='experince_details-icon'>{icon}</a>
                                            <h4>{head}</h4>
                                            <small className='text-light'>{exp}</small>
                                        </article>

                                    )
                                })

                            }

                        </div>
                        </div>
                    </div>
                </div>

                </div>

         
        </section>

    )
}

export default exp
