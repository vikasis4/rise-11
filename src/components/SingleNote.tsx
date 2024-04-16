import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



function SingleNote({ desc }: { desc: string }) {
    return (
        <Card>
            <CardHeader>
            </CardHeader>
            <CardContent>
                <CardDescription>{desc}</CardDescription>
                {/* <p>Card Content</p> */}
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>

    )
}

export default SingleNote