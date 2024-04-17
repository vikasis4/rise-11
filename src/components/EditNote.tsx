'use client'
import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Pencil2Icon } from '@radix-ui/react-icons'
import { Input } from './ui/input';


function EditNote({ Edit_Note, data }: any) {

    const [text, setText] = React.useState(data.desc);
    const handleChange = (e: any) => {
        setText(e.target.value)
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Pencil2Icon height='24' width='24' />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogDescription>
                        <Input
                            className='font-sans'
                            value={text}
                            name="desc"
                            onChange={handleChange}
                        />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => Edit_Note({ noteId: data.id, text })}>Submit</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default EditNote