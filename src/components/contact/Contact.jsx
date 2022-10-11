import React from 'react'
import './Contact.scss'
import { AiOutlineMail } from 'react-icons/ai'
import { TbMessageCircle } from 'react-icons/tb'
import { BsWhatsapp } from 'react-icons/bs'


const data = [
    {
        icon: <AiOutlineMail />,
        link: 'mailto:trentbrian007@gmail.com',
        head: 'theemail@gmail.mail',
        meso: 'Send an Email',
    },
    {
        icon: <TbMessageCircle />,
        link: 'https://facebook.com',
        head: 'Messanger',
        meso: 'Contact Us Thru Message',
    },
    {
        icon: <BsWhatsapp />,
        link: 'https://api.whatsapp.com/send?phone+254794410921',
        head: ' Whatsapp',
        tail: '0794410921',
        meso: 'Find us on Whatsapp',
        
    }
]




const Contact1 = () => {

    return (

        <section id='contact' className='contact'>
            <div className='contact_head'>
                <h3>Get In Touch</h3>
                <h1> Contact Us</h1>
            </div>

            <div className='container contact_container'>
                <div className='contact_options'>

                    {
                        data.map(({ icon, link, head, tail, meso }) => {
                            return (
                                <article className='contact_option'>
                                    <a href={link}>{icon}</a>
                                    <h5>{head}</h5>
                                    <h5>{tail}</h5>
                                    <a href={link}>{meso}</a>
                                </article>
                            )
                        })
                    }
                </div>
                <form action=''>
                    <input type='text' name='name' placeholder='Your Full Name' placeholder-color='white' />
                    <input type='email' name='email' placeholder='Your Email' />
                    <textarea type='message' name='message' placeholder='Your Message' />
                    <button type='submit' className='btn btn-primary' >Send Message</button>
                </form>
            
                
            </div>

        </section>

    )
}

export default Contact1