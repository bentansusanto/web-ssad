import Footer from '@/components/Footer'
import React from 'react'

const testLayout = ({children}) => {
  return (
    <div>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default testLayout