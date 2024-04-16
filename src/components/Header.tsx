'use client'
import { headerName } from '@/config/constants'
import { useRouter } from 'next/navigation'
import React from 'react'


function Header() {

  const router = useRouter();
  const handleclick = () => {
    router.push('/auth')
  }
  const handleclick2 = () => {
    router.push('/')
  }

  return (
    <div className="w-full shadow-md mb-12">
      <div className="px-4 py-4 shadow-md bg-blue-500 w-full fixed top-0 text-white text-2xl flex justify-between">
        <div onClick={handleclick2}>{headerName}</div>
        <div onClick={handleclick}>Login</div>
      </div>
    </div>
  )
}

export default Header