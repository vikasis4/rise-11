'use client'
import React from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import UserQuery from '@/store/user/UserQuery'
import AlertComp from '../Alert'
import ResendOtp from '../ResendOtp'


function Form({ className, type }: any) {

  const { form } = UserQuery()
  const [data, setData] = React.useState({ email: '', name: '', otp: 0 });
  const handleChange = (event: any) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const handleClick = async () => {
    if (type == 'Login') {
      form.signIn.FormSignIn(data.email)
    } else {
      form.signUp.FormSignUn({ email: data.email, name: data.name })
    }
  }
  const handleClick2 = async () => { form.otp.OtpVerify({ email: data.email, otp: data.otp }) }

  if (
    form.signIn.Error_FSI ||
    form.signUp.Error_FSU ||
    form.otp.Error_OV ||
    form.otp.Error_OR
  ) return <AlertComp type="red" title="Error" desc="Something Went Wrong" />

  if (
    form.signIn.Pending_FSI ||
    form.signUp.Pending_FSU ||
    form.otp.Pending_OV ||
    form.otp.Pending_OR
  ) return <AlertComp type="lol" title="Loading" desc="Please wait for a while" />

  if (form.signIn.data_FSI?.status == 'true' || form.signUp.data_FSU?.status == 'true') {
    return (
      <Card className={cn("w-[380px]", className)}>
        <CardHeader>
          <CardTitle className="flex gap-2">
            Enter the OTP
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full">
          <Input
            className='font-sans'
            value={data.otp}
            name="otp"
            onChange={handleChange}
          />
          <ResendOtp fxn={() => form.otp.OtpResend({ email: data.email })} />
        </CardContent>
        <CardFooter>
          <Button onClick={handleClick2} className="w-full bg-blue-500">
            Submit
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className={cn("w-[380px]", className)}>
      {type == 'Register' ?
        <>
          <CardHeader>
            <CardTitle className="flex gap-2">
              Enter Your Name
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full">
            <Input
              className='font-sans'
              value={data.name}
              name="name"
              onChange={handleChange}
            />
          </CardContent>
        </>
        :
        null
      }
      <CardHeader className={type == 'Register' ? "relative bottom-6" : ""}>
        <CardTitle className="flex gap-2">
          Enter Your Email
        </CardTitle>
      </CardHeader>
      <CardContent className={type == 'Register' ? "w-full relative bottom-6" : "w-full"}>
        <Input
          className='font-sans'
          value={data.email}
          onChange={handleChange}
          name="email"
        />
      </CardContent>
      <CardFooter>
        <Button onClick={handleClick} className="w-full bg-blue-500">
          Submit
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Form