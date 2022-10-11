import React from 'react'
import './nav.scss'
import { IoMdHome } from 'react-icons/io'
import { AiOutlineBars } from 'react-icons/ai'
import { TbSettings } from 'react-icons/tb'
import { BiBookmarkPlus } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { useState } from 'react'

import Pic from './../../assets/thenav (2).png'

const data = [
    {
        link: '#',
        state: 'active',
        icon: <IoMdHome />,
        jina: 'Home',
    },

    {
        link: '#services',
        state: 'active',
        icon: <TbSettings />,
        jina: 'Services',
    },
    {
        link: '#about',
        state: 'active',
        icon: <AiOutlineBars />,
        jina: 'About',
    },

    {
        link: '#experience',
        state: 'active',
        icon: <BiBookmarkPlus />,
        jina: 'Experience',
    },
    {
        link: '#contact',
        state: 'active',
        icon: <TbMessageCircle />,
        jina: 'Contact',
    },

]



const Nav1 = () => {
    const [activeNav, setNav] = useState('#');

    const [pop, setPop] = useState(true);

    const change = () => {
        if (window.scrollY > 600) {
            setPop(true)
        }
        else {
            setPop(false)

        }

    }

    window.addEventListener('scroll', change);
    return (
        <div>
        <nav className={pop ? 'nav active' : 'nav'}>

            <div className='nav_pic'>
                <img src={Pic} alt='about Image' />
            </div>
            {
                data.map(({ link, state, icon, jina }) => {
                    return (
                        <div>

                            <a href={link} onClick={() => setNav({ link })} className={activeNav == { link } ? { state } : ''}>{icon} {jina}</a>
                        </div>

                    )
                })
            }
        </nav>
        </div>

    )
}

export default Nav1