'use client'
import { GoogleLogin, } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useToast } from '@/components/ui/use-toast';
import UserQuery from '@/store/user/UserQuery';
import AlertComp from '../Alert';


function Google({ type }: { type: string }) {

    const { toast } = useToast();
    const { google } = UserQuery();

    const handleSuccess = async (credentialResponse: any) => {
        const decoded = jwtDecode<any>(credentialResponse.credential);
        if (type == 'Login') {
            google.signIn.GoogleSignIn(decoded.email)
        } else {
            google.signUp.GoogleSignUp({ email: decoded.email, name: decoded.name })
        }
    };

    if (google.signIn.Error_GSI || google.signUp.Error_GSU) return <AlertComp type="red" title="Error" desc="Something Went Wrong" />
    if (google.signIn.Pending_GSI || google.signUp.Pending_GSU) return <AlertComp type="lol" title="Processing" desc="Please wait while the Account is being created" />

    const handleError = () => {
        toast({
            variant: "destructive",
            title: "Warning",
            description: "Authentication Failed",
        })
    };

    return (
        <GoogleLogin
            text="continue_with"
            size="large"
            onSuccess={handleSuccess}
            onError={handleError}
        />
    );
}

export default Google