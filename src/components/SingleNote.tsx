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



function SingleNote({ desc }: { desc: string }) {
    return (
        <Card className='bg-secondary'>
            <CardHeader className='flex-row rounded-t-md mb-2 py-2 flex justify-between items-center'>
                <DeleteNote />
                <EditNote />
            </CardHeader>
            <CardContent>
                <CardDescription>{desc}</CardDescription>
            </CardContent>
        </Card>

    )
}

export default SingleNote