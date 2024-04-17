'use client'
import { useToast } from "@/components/ui/use-toast"

const HandleNotesRes = () => {

    const { toast } = useToast()

    const HandleRes = ({ data, type }: any) => {

        if (data.status == 'false') {
            toast({
                variant: "destructive",
                title: "Warning",
                description: "Something Went Wrong!",
            })
            return false
        } else if (data.status == 'true') {
            toast({
                title: "Success",
                description: type == 'edit' ? "Note Edited successfully"
                    : type == 'create' ? "Note Added successfully"
                        : "Note Deleted successfully"
            })
            return true
        }
    }

    return HandleRes
}

export default HandleNotesRes