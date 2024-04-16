'use client'
import React from 'react'
import SingleNote from './SingleNote';
import { NoNote } from '@/config/constants';
import { Pencil1Icon } from '@radix-ui/react-icons';


function RenderNotes() {

    const auth = false

    return (
        auth ?
            <SingleNote />
            :
            <div className="flex gap-4 justify-center items-center">
                <Pencil1Icon width="30" height="30" />
                <h1>{NoNote}</h1>
            </div>
    )
}

export default RenderNotes