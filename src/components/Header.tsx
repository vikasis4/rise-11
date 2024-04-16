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
    <div className="p-4 bg-blue-400 text-white shadow-md text-2xl flex justify-between">
      <div onClick={handleclick2}>{headerName}</div>
      <div onClick={handleclick}>Login</div>
    </div>
  )
}

export default Header