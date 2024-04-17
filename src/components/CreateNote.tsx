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
import { PlusCircledIcon } from "@radix-ui/react-icons"
import NotesQuery from "@/store/notes/notesQuery"



type CardProps = React.ComponentProps<typeof Card>

export function CreateNote({ className, ...props }: CardProps) {

    const [text, setText] = React.useState('');
    const { Create } = NotesQuery()
    const handleChange = (event: any) => {
        setText(event.target.value);
    }
    const handleClick = () => {
        Create.CreateNote({text});
        setText('');
    }


    return (
        <Card className={cn("w-[380px]", className)} {...props}>
            <CardHeader>
                <CardTitle className="flex gap-2">
                    <PlusCircledIcon />
                    Create New Task
                </CardTitle>
            </CardHeader>
            <CardContent className="w-full">
                <textarea
                    className="border-2 w-full rounded-md"
                    title="Create New Task"
                    value={text}
                    onChange={handleChange}
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
