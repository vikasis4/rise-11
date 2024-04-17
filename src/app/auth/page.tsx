'use client'
import Form from '@/components/auth/Form'
import Google from '@/components/auth/Google'
import Header from '@/components/Header'
import UserQuery from '@/store/user/UserQuery'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {

  const [authType, setAuthType] = React.useState('Login');
  const { user } = UserQuery();
  const router = useRouter()

  React.useEffect(() => {
    if (user?.status == 'true') {
      router.push('/')
    }
  }, [user?.status])

  return (
    <div className="flex h-screen flex-col items-center bg-secondary">
      <Header />
      <div className="flex h-full flex-col justify-center items-center gap-8">
        <h1 className="text-black text-4xl font-serif">{authType}</h1>
        <Google type={authType} />
        <h1>OR</h1>
        <Form type={authType} />
        <div className="flex gap-8">
          <h1 className="text-black font-semibold">{authType == 'Login' ? 'Do Not have any Account ?' : 'Already have an Account ?'}</h1>
          <button onClick={() => setAuthType(authType == 'Login' ? 'Register' : 'Login')} className="text-blue-500">{authType == 'Login' ? 'Register' : 'Login'}</button>
        </div>
      </div>
    </div>
  )
}

export default page