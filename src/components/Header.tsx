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
    <div className="flex-2 flex w-full items-center justify-center">
      <Card className="w-[90%] bg-blue-600 flex flex-row justify-between items-center my-4 p-4 lg:px-8">
        <div className="text-white hover:cursor-pointer  lg:font-semibold text-2xl" onClick={handleclick2}>{headerName}</div>
        <RocketIcon color="white" height="30" width="30" />
        {
          user ?
            <div className="text-white hover:cursor-pointer lg:font-semibold text-2xl" onClick={handleclick3}>{user.name.slice(0, 5)}</div>
            :
            <div className="text-white hover:cursor-pointer lg:font-semibold text-2xl" onClick={handleclick}>Auth</div>
        }
      </Card>
    </div>
  )
}

export default Header