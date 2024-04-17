import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import EditNote from './EditNote'
import DeleteNote from './DeleteNote'
import NotesQuery from '@/store/notes/notesQuery'



function SingleNote({ desc, id }: { desc: string, id: string }) {

    const { Delete, Edit_Note } = NotesQuery()

    return (
        <Card className='bg-secondary w-[90%]'>
            <CardHeader className='flex-row rounded-t-md mb-2 py-2 flex justify-between items-center'>
                <DeleteNote fxn={() => Delete.DeletNote({ id })} />
                <EditNote Edit_Note={Edit_Note} data={{ desc, id }} />
            </CardHeader>
            <CardContent>
                <CardDescription>{desc}</CardDescription>
            </CardContent>
        </Card>

    )
}

export default SingleNote