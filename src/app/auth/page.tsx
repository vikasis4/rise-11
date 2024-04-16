import Form from '@/components/auth/Form'
import Google from '@/components/auth/Google'
import Header from '@/components/Header'
import React from 'react'

function page() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center gap-4">
        <Google />
        <h1>OR</h1>
        <Form />
      </div>
    </>
  )
}

export default page