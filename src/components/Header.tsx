'use client'
import { headerName } from '@/config/constants'
import { useRouter } from 'next/navigation'
import React from 'react'
import {Card} from "@/components/ui/card"
import { RocketIcon } from '@radix-ui/react-icons'

function Header() {

  const router = useRouter();
  const handleclick = () => {
    router.push('/auth')
  }
  const handleclick2 = () => {
    router.push('/')
  }

  return (
    <>
      <div className="h-12"></div>
      <Card className="w-[90%] bg-blue-600 fixed top-0 flex flex-row justify-between items-center my-4 p-4">
        <div className="text-white" onClick={handleclick2}>{headerName}</div>
        <RocketIcon color="white" height="30" width="30" />
        <div className="text-white" onClick={handleclick}>Login</div>
      </Card>
    </>
  )
}

export default Header