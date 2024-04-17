import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import React from 'react'

function AlertComp({ type, desc, title }: any) {
    return (
        <Alert  variant={type == 'red' ? "destructive" : 'default'}>
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>
                {desc}
            </AlertDescription>
        </Alert>

    )
}


export default AlertComp