import React from 'react'
import Timer from './Timer';

function ResendOtp({fxn}: any) {

    const [count, setCount] = React.useState(40);
    const handleClick = () => {
        fxn();
        setCount(60)
    }


    return (
        count === 0 ?
            <h1
                onClick={handleClick}
                className="font-medium mt-4 font-playfair hover:cursor-pointer"
            >Resend OTP</h1>
            :
            <Timer count={count} setCount={setCount} />
    )
}

export default ResendOtp