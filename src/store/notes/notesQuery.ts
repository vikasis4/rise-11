'use client'
import {
    useQuery,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query'
import { API_NoteCreate, API_NoteDelete, API_NoteEdit, API_NotesFetch } from '@/config/api';
import UserQuery from '@/store/user/UserQuery'
import HandleNotesRes from '@/hooks/HandleNotesRes';
import React from 'react';

function NotesQuery() {

    const queryClient = useQueryClient()
    const HandleResFxn = HandleNotesRes()
    const { user } = UserQuery()

    var { data: notes } = useQuery({
        queryKey: ['notes'],
        queryFn: () => fetch(API_NotesFetch + user._id).then((res) => res.json()),
    })

    React.useEffect(() => {
        queryClient.invalidateQueries({ queryKey: ['notes'] })
    }, [user?.name])

    /////////////////////////// Notes ///////////////////////////////

    const { mutate: CreateNote, isError: Error_C, isPending: Pending_C } = useMutation({
        mutationFn: (data: any) =>
            fetch(API_NoteCreate, {
                method: 'POST',
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ userId: user._id, note: data.text })
            }).then(res => res.json()),
        onSuccess: async (data: any) => {
            var res = HandleResFxn({ data, type: 'create' });
            if (res) { queryClient.invalidateQueries({ queryKey: ['notes'] }) }
        },
    })
    const { mutate: DeletNote, isError: Error_D, isPending: Pending_D } = useMutation({
        mutationFn: (data: any) =>
            fetch(API_NoteDelete + data.id + '/' + user._id, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json; charset=UTF-8" },
            }).then(res => res.json()),
        onSuccess: async (data: any) => {
            var res = HandleResFxn({ data, type: 'delete' });
            if (res) { queryClient.invalidateQueries({ queryKey: ['notes'] }) }
        },
    })
    const { mutate: Edit_Note, isError: Error_E, isPending: Pending_E } = useMutation({
        mutationFn: (data: any) =>
            fetch(API_NoteEdit, {
                method: 'POST',
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ userId: user._id, note: data.text, noteId: data.noteId})
            }).then(res => res.json()),
        onSuccess: async (data: any) => {
            var res = HandleResFxn({ data, type: 'edit' });
            if (res) { queryClient.invalidateQueries({ queryKey: ['notes'] }) }
        },
    })




    if (!notes || notes?.status == 'false') { notes = { notes: [] } }
    return {
        user,
        notes: notes.notes,
        Create: {
            CreateNote,
            Error_C,
            Pending_C
        },
        Delete: {
            DeletNote
        },
        Edit_Note
    }

}

export default NotesQuery