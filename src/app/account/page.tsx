'use client'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import UserQuery from '@/store/user/UserQuery'
import { useRouter } from 'next/navigation'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
    <div className="flex bg-secondary flex-col justify-start h-screen items-center">
      <Header />
      <Card className="w-[90%] lg:w-[50%] mt-24">
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button onClick={logout} variant="destructive" className="w-full mt-8 shadow-md" >LogOut</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default page