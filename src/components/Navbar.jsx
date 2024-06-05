import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { styles } from './styles';
import {navLinks} from '../constants';
import {rlogo, menu, close} from '../assets';

const Navbar = () => {
const [active, setActive] = useState("")
const[toggel, setToggel]=useState(true)

  return (
    <nav className={'${styles.paddingX} w-full flex-1 justify-between items-center py-5 fixed top-0 z-20 bg-black'}>
      <div className='w-full  flex  items-center max-w-7xl mx-auto'>
           <Link 
                to='/'
                className='flex items-center gap-2'
                onClick={()=> {
                setActive("")
                window.scrollTo(0, 0);
            }}>
              <img src={rlogo} alt="logo" className='w-9 h-9 object-contain' />
                <p className='text-white text-[18px] font-bold cursor-pointer'>Rohit Yadav</p>
           </Link>
       <ul className='list-none hidden sm:flex flex-row gap-10'>
              {navLinks.map((Link) => (
                <li 
                  key={Link.id}
                  className={`${active === Link.title ? "text-white" : "text-secondary"} hover:text-white flex text-[18px] font-medium cursor-pointer`}
                  onClick={()=> setActive(Link.title)}
                > 
                <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
                <div className='sm-hidden flex flex-1 justify-end items-center'>
                  <img src={toggel ? menu : close} alt='menu' className='w-[28px] object-contain cursor-pointer' onClick={()=>setToggel(!toggel)}/>
                    <div className={`${toggel ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 roumded-xl`}>
                      <ul className='list-none flex justify-end items-start flex-col gap-4'>
                        {navLinks.map((Link) => (
                          <li 
                            key={Link.id}
                            className={`${active === Link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                            onClick={()=> {
                              setToggel(toggel);
                              setActive(Link.title);
                            }}
                          > 
                          <a href={`#${Link.id}`}>{Link.title}</a>
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
        </div>
      
    </nav>
  )
}

export default Navbar