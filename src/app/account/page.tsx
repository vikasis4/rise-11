'use client'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import UserQuery from '@/store/user/UserQuery'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {

  const { user } = UserQuery();
  const router = useRouter()
  const logout = () => {
    localStorage.removeItem('token');
    location.reload()
  }
  React.useEffect(() => {
    if (user?.status == 'false' || !user) {
      router.push('/')
    }
  }, [user?.status])

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <Header />
      <h1 className="font-semibold font-serif text-2xl">{user.name}</h1>
      <h1 className="mt-2 font-serif font-semibold text-2xl">{user.email}</h1>
      <Button onClick={logout} variant="destructive" className="w-[90%] mt-8 shadow-md" >LogOut</Button>
    </div>
  )
}

export default page