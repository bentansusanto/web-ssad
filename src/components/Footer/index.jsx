import { MediaQuery } from '@/config'
import Link from 'next/link'
import React from 'react'
import {BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'

const socialMedia = [
  {icon: <BsInstagram/>, link: "https://instagram.com"},
  {icon: <BsFacebook/>, link: "https://facebook.com"},
  {icon: <BsTwitter/>, link: "https://twitter.com"},
]


const Footer = () => {
  const isMobile = MediaQuery("(max-width: 600px)")
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className={`${isMobile ? "mb-3" : "flex items-center justify-between mx-20 mb-5"}`}>
        <p className={`${isMobile&&"text-center"}`}>Copyright © {year}, All Can Reserved </p>
        <div className={`${isMobile? "hidden" : "flex items-center space-x-5"}`}>
          {
            socialMedia.map((val) => (
              <div key={val}>
                <Link href={val.link} className='text-2xl text-gray-500'>{val.icon}</Link>
              </div>
            ))
          }
          
        </div>
    </div>
  )
}

export default Footer