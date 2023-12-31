import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './fonts.css'
import { HamburgerMenu } from './HamburgerMenu'

export const Navbar = () => {
  return (
    <nav className='flex justify-between bg-white'>
      <Link to='/' className='text-white font-canela px-3 py-4 flex-shrink-0'>
        <img src='/Logo.png' alt="Logo" className='h-auto w-auto min-w-max max-h-14' />
      </Link>
      <HamburgerMenu className="md:hidden" />
      <ul className='hidden md:flex items-center justify-between mr-4 md:text-base md:mr-6 lg:mr-10 px-2 lg:px-8 space-x-2 sm:space-x-3 md:space-x-5 lg:space-x-16'>
        <CustomLink to='/about' className='font-avenir hover:text-gray-500 focus:text-pma-orange'>ABOUT</CustomLink>
        <CustomLink to='/stories' className='font-avenir hover:text-gray-500 focus:text-pma-orange'>STORIES</CustomLink>
        <CustomLink to='/misterras' className='font-avenir hover:text-gray-500 focus:text-pma-orange whitespace-nowrap'>MIS TERRAS</CustomLink>
        <CustomLink to='/laselfie' className='font-avenir avenir hover:text-gray-500 focus:text-pma-orange whitespace-nowrap'>LA SELFIE</CustomLink>
        <CustomLink to='/education' className='font-avenir hover:text-gray-500 focus:text-pma-orange'>EDUCATION</CustomLink>
        <ul>
          <a href='https://mailchi.mp/8bb2d79e8e70/sign-up' className='font-avenir hover:text-gray-500 focus:text-pma-orange'>CONTACT</a>
        </ul>
      </ul>
    </nav>
  )
}

export const Footer = () => {
  return (
    <nav className='flex flex-col md:flex-row justify-between bg-pma-green'>
      <div className='flex flex-grow items-center list-none mt-10 md:mt-16 mb-8 ml-10 text-white'>
        <CustomLink to='/about' className='font-avenir underline text-xs px-2'>About</CustomLink>
        <CustomLink to='/stories' className= 'font-avenir underline text-xs px-2'>Stories</CustomLink>
        <CustomLink to='/misterras' className='font-avenir underline text-xs px-2'>Mis Terras</CustomLink>
        <CustomLink to='/laselfie' className='font-avenir underline text-xs px-2'>La Selfie</CustomLink>
        <CustomLink to='/education' className='font-avenir underline text-xs px-2'>Education</CustomLink>
        <li>
          <a href='https://mailchi.mp/8bb2d79e8e70/sign-up' className='font-avenir underline text-xs px-2'>Contact</a>
        </li>
      </div>  
      <div className='hidden md:flex flex-col px-4 mt-12 mr-8'>
        <div className='flex justify-between items-center ml-10 mb-3'>
          <a href='https://www.instagram.com/picturingmexicanamerica'><img src='/icons/instagram.svg' alt='' className='text-white'/></a>
          <a href='https://www.facebook.com/picturingmexicanamerica'><img src='/icons/youtube.svg' alt='' className='text-white'/></a>
          <a href='https://www.youtube.com/channel/UCeuIC2BpuyY0yTau7OCwvCA'><img src='/icons/facebook.svg' alt='' className='text-white'/></a>
          <a href='https://www.twitter.com/picturingmexam?lang=en'><img src='/icons/twitter-x.svg' alt='' className='text-white'/></a>
        </div>
        <div className='hidden md:flex text-x text-white'>
          <p className='px-1'>Picturing Mexican America</p>
          <img src='/icons/copyright.svg' alt='' className=' w-4' />
          <p className='px-1'> 2022</p>
        </div>
      </div>
    </nav>
  )
}


function CustomLink({ to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true })

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

