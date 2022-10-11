import React from 'react'
import './footer.scss'
import { FaTwitter } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'


const data = [
    {
        link: '#',
        text: 'Home',
    },
    {
        link: '#about',
        text: 'About',
    },
    {
        link: '#Experience',
        text: 'Experince',
    },

    {
        link: '#service',
        text: 'Services',
    },

    {
        link: '#port',
        text: 'Portfolio',
    },

    {
        link: '#testimony',
        text: 'Testimony',
    },

    {
        link: '#contact',
        text: 'Contact',
    },


]

const ujumbe = [
    {
        link: 'http://facebook.com',
        icon: <BsFacebook />,
    },
    {
        link: 'http://instagram.com',
        icon: < BsInstagram />
    },
    {
        link: 'http://twitter.com',
        icon: < FaTwitter />
    },
    {
        link: 'https://linkedin.com',
        icon: <BsLinkedin />
    },
    {
        link: 'https://github.com',
        icon: <BsGithub />
    },


]

const footer1 = () => {
    return (
    
        <footer className='footer'>
            <a href='#' className='footer_logo'></a>
            <ul className="permalinks">
                {
                    data.map(({ link, text }) => {

                        return (
                            <li><a href={link}>{text}</a> </li>

                        )
                    }
                    )
                }
            </ul>

            <div className='footer_socials'>
                {
                    ujumbe.map(({ link, icon }) => {
                        return (
                            <a href={link}>{icon}</a>

                        )
                    })
                }
            </div>

            <div className="footer_copyright">
                <small>Maglev LLC</small>
            </div>

        </footer>
       


    )
}

export default footer1