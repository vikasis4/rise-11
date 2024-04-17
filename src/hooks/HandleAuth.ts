'use client'
import { useToast } from "@/components/ui/use-toast"

const HandleAuth = () => {

    const { toast } = useToast()

    const HandleAuthFxn = (data: any) => {

        if (data.status == 'noUser') {
            toast({
                variant: "destructive",
                title: "Warning",
                description: "User with this Email does not exist !",
            });
            return false
        } else if (data.status == 'duplicate') {
            toast({
                variant: "destructive",
                title: "Warning",
                description: "User with this Email already Exsists!",
            })
            return false
        } else if (data.status == 'error') {
            toast({
                variant: "destructive",
                title: "Warning",
                description: "Something Went Wrong!",
            })
            return false
        } else if (data.status == 'true') {
            localStorage.setItem('token', data.token)
            toast({
                title: "Success",
                description: "Authentication done successfully",
            })
            return true
        }
    }

    return HandleAuthFxn
}

export default HandleAuth