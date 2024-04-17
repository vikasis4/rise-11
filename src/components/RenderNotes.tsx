'use client'
import React from 'react'
import SingleNote from './SingleNote';
import { NoNote } from '@/config/constants';
import { Pencil1Icon } from '@radix-ui/react-icons';
import NotesQuery from '@/store/notes/notesQuery';

function RenderNotes() {

    const { notes } = NotesQuery()

    if (notes.length == 0) {
        return (
            <div className="flex gap-4 justify-center items-center">
                <Pencil1Icon width="30" height="30" />
                <h1>{NoNote}</h1>
            </div>
        )
    }
    return (
        <div className="flex flex-col lg:flex-row lg:px-12 gap-4 justify-center w-full my-4 items-center">
            {
                notes.map((data: any) => {
                    return <SingleNote key={data._id} desc={data.note} id={data._id} />
                })
            }
        </div>
    )
}

export default RenderNotes