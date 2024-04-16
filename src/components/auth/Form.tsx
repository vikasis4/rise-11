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


type CardProps = React.ComponentProps<typeof Card>

function Form({ className, ...props }: CardProps) {

  const [email, setEmail] = React.useState();
  const handleChange = (event: any) => {
    setEmail(event.target.value)
  }

  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle className="flex gap-2">
          Enter Your Email
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <Input 
        className='font-sans'
        value={email} 
        onChange={handleChange} 
        />
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-blue-500">
          Submit
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Form