import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="bg-black p-5 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold  text-white ">Porfolio</h1>
        </div>
   
      <div className=" text-white ">
        <Link href="/" className="border border-red-100 p-1 mx-2 hover:bg-gray-700 rounded-lg">Home</Link>
        <Link href="/About" className="border border-red-100 p-1 mx-2 hover:bg-gray-700 rounded-lg">About</Link>
        <Link href="/Contact" className="border border-red-100 p-1 mx-2 hover:bg-gray-700 rounded-lg">Contact</Link>
      </div>
      </div>
  )
}

export default Header