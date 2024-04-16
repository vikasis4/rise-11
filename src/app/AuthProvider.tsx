import { GoogleOAuthProvider } from '@react-oauth/google';

function AuthProvider({ children }: any) {
    return (
        <GoogleOAuthProvider clientId="223380682601-9svlujgorbrgfe71odusn9qsf0smq0nf.apps.googleusercontent.com">
            {children}
        </GoogleOAuthProvider>
    );
}

export default AuthProvider;