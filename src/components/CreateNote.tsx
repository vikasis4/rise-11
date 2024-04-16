'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import React from "react"



type CardProps = React.ComponentProps<typeof Card>

export function CreateNote({ className, ...props }: CardProps) {

    const [text, setText] = React.useState('');
    const handleChange = (event: any) => {
        setText(event.target.value);
    }

    return (
        <Card className={cn("w-[380px]", className)} {...props}>
            <CardHeader>
                <CardTitle>Create New Task</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div>
                    <textarea 
                    className="border-2 rounded-md"
                     title="Create New Task" value={text} onChange={handleChange} />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    Submit
                </Button>
            </CardFooter>
        </Card>
    )
}
