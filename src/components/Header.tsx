'use client'
import { headerName } from '@/config/constants'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Card } from "@/components/ui/card"
import { RocketIcon } from '@radix-ui/react-icons'
import UserQuery from '@/store/user/UserQuery'

function Header() {

  const router = useRouter();

  const { user } = UserQuery();


  const handleclick = () => {
    router.push('/auth')
  }
  const handleclick2 = () => {
    router.push('/')
  }
  const handleclick3 = () => {
    router.push('/account')
  }

  return (
    <>
      <div className="h-12"></div>
      <Card className="w-[90%] bg-blue-600 fixed top-0 flex flex-row justify-between items-center my-4 p-4">
        <div className="text-white" onClick={handleclick2}>{headerName}</div>
        <RocketIcon color="white" height="30" width="30" />
        {
          user ?
            <div className="text-white" onClick={handleclick3}>{user.name.slice(0,5)}</div>
            :
            <div className="text-white" onClick={handleclick}>Auth</div>
        }
      </Card>
    </>
  )
}

export default Header