import Form from '@/components/auth/Form'
import Google from '@/components/auth/Google'
import Header from '@/components/Header'
import React from 'react'

function page() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex h-full flex-col justify-center items-center gap-8">
        <Google />
        <h1>OR</h1>
        <Form />
      </div>
    </div>
  )
}

export default page