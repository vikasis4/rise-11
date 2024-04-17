'use client'
import React from 'react'
import {
    useQuery,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query'
import { API_googleAuthSignIn, API_googleAuthSignUp, API_TokenVeify } from '@/config/api';
import HandleAuth from '@/hooks/HandleAuth';


function UserQuery() {

    const queryClient = useQueryClient()
    const HandleAuthFxn = HandleAuth()

    var { data: user, isLoading: Pending_User, error: Error_User } = useQuery({
        queryKey: ['user'],
        queryFn: () => fetch(API_TokenVeify + localStorage.getItem('token')).then((res) => res.json()),
    })
    

    const { mutate: GoogleSignIn, isError: Error_GSI, isPending: Pending_GSI } = useMutation({
        mutationFn: (email: string) =>
            fetch(API_googleAuthSignIn, {
                method: 'POST',
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ email })
            }).then(res => res.json()),
        onSuccess: async (data: any) => {
            var res = HandleAuthFxn(data);
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
            var res = HandleAuthFxn(data);
            if (res) { queryClient.invalidateQueries({ queryKey: ['user'] }) }
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
    }

}

export default UserQuery