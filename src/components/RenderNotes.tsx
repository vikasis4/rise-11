'use client'
import React from 'react'
import SingleNote from './SingleNote';
import { NoNote } from '@/config/constants';
import { Pencil1Icon } from '@radix-ui/react-icons';


const fg = "With Catalyst, we set out to build a UI kit that tomorrow’s Stripe or Linear would feel good about using to build their products — design-obsessed teams who want to own their UI components, and would never choose an off-the-shelf library.So it’s not a dependency you install, instead you download the source and copy the components into your own project where they become the starting point for your own component system"

function RenderNotes() {

    const auth = true;
    const arr = [1, 2, 3]

    return (
        auth ?
            <div className="flex flex-col px-4 gap-4 justify-center my-4 items-center">
                {
                    arr.map((element) => {
                        return <SingleNote desc={fg} />
                    })
                }
            </div>
            :
            <div className="flex gap-4 justify-center items-center">
                <Pencil1Icon width="30" height="30" />
                <h1>{NoNote}</h1>
            </div>
    )
}

export default RenderNotes