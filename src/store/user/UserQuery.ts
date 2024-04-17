'use client'
import {
    useQuery,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query'
import { API_googleAuthSignIn, API_googleAuthSignUp, API_OtpResend, API_OtpVerify, API_SignIn, API_SignUp, API_TokenVeify } from '@/config/api';
import HandleAuth from '@/hooks/HandleAuth';


function UserQuery() {

    const queryClient = useQueryClient()
    const HandleAuthFxn = HandleAuth()

    var { data: user } = useQuery({
        queryKey: ['user'],
        queryFn: () => fetch(API_TokenVeify + localStorage.getItem('token')).then((res) => res.json()),
    })

    /////////////////////////// GOOGLE ///////////////////////////////

    const { mutate: GoogleSignIn, isError: Error_GSI, isPending: Pending_GSI } = useMutation({
        mutationFn: (email: string) =>
            fetch(API_googleAuthSignIn, {
                method: 'POST',
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ email })
            }).then(res => res.json()),
        onSuccess: async (data: any) => {
            var res = HandleAuthFxn({ data, type: 'google' });
            if (res) { queryClient.invalidateQueries({ queryKey: ['user'] }) }
        },
    })

    const { mutate: GoogleSignUp, isError: Error_GSU, isPending: Pending_GSU } = useMutation({
        mutationFn: (data: any) =>
            fetch(API_googleAuthSignUp, {
                method: 'POST',
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ email: data.email, name: data.name })
            }).then(res => res.json()),
        onSuccess: async (data: any) => {
            var res = HandleAuthFxn({ data, type: 'google' });
            if (res) { queryClient.invalidateQueries({ queryKey: ['user'] }) }
        },
    })

    /////////////////////////// FORM ///////////////////////////////
    const { mutate: FormSignIn, isError: Error_FSI, isPending: Pending_FSI, data: data_FSI } = useMutation({
        mutationFn: (data: any) =>
            fetch(API_SignIn, {
                method: 'POST',
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ email: data })
            }).then(res => res.json()),
        onSuccess: async (data: any) => {
            HandleAuthFxn({ data, type: 'form' });
        },
    })

    const { mutate: FormSignUn, isError: Error_FSU, isPending: Pending_FSU, data: data_FSU } = useMutation({
        mutationFn: (data: any) =>
            fetch(API_SignUp, {
                method: 'POST',
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ email: data.email, name: data.name })
            }).then(res => res.json()),
        onSuccess: async (data: any) => {
            HandleAuthFxn({ data, type: 'form' });
        },
    })

    /////////////////////////// OTP ///////////////////////////////
    const { mutate: OtpVerify, isError: Error_OV, isPending: Pending_OV } = useMutation({
        mutationFn: (data: any) =>
            fetch(API_OtpVerify, {
                method: 'POST',
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ email: data.email, otp: data.otp })
            }).then(res => res.json()),
        onSuccess: async (data: any) => {
            var res = HandleAuthFxn({ data, type: 'google' });
            if (res) { queryClient.invalidateQueries({ queryKey: ['user'] }) }
        },
    })
    const { mutate: OtpResend, isError: Error_OR, isPending: Pending_OR, data: data_OR } = useMutation({
        mutationFn: (data: any) =>
            fetch(API_OtpResend, {
                method: 'POST',
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ email: data.email })
            }).then(res => res.json()),
        onSuccess: async (data: any) => {
            HandleAuthFxn({ data, type: 'form' });
        },
    })


    if (!user || user?.status == 'false') { user = false }
    return {
        user,
        google: {
            signIn: {
                GoogleSignIn,
                Error_GSI,
                Pending_GSI
            },
            signUp: {
                GoogleSignUp,
                Error_GSU,
                Pending_GSU
            }
        },
        form: {
            signIn: {
                FormSignIn,
                Error_FSI,
                Pending_FSI,
                data_FSI
            },
            signUp: {
                FormSignUn,
                Error_FSU,
                Pending_FSU,
                data_FSU,
            },
            otp: {
                OtpVerify,
                Error_OV,
                Pending_OV,
                OtpResend,
                Error_OR,
                Pending_OR,
                data_OR
            }
        }
    }

}

export default UserQuery