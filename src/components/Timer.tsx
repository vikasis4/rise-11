'use client'
import React from 'react'

function Timer({count, setCount}:any) {


    React.useEffect(() => {        
        const interval = setInterval(() => {
            if (count !== 0) {
                setCount(count - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [count]);

    return (
        <div className="font-playfair">Resend OTP after :- {count}</div>
    )
}

export default Timer