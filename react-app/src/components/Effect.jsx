import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Effect = () => {

    const navigate = useNavigate()

    const [number, setNumber] = useState(0)
    const [number2, setNumber2] = useState(0)

    useEffect(() => {
        console.log("Effect called")
    }, [])

    useEffect(() => {
        console.log("Effect Re_rendering")
    }, [number])

    useEffect(() => {
        console.log("Effect Always Re_rendering")
    })

    return (
        <div>
            <h1>A Full Stack Project</h1>
            {number}
            <button onClick={() => setNumber(number + 1)}>Click</button>
            {number2}
            <button onClick={() => setNumber2(number2 + 1)}>Click</button>

            <button onClick={() => navigate("/conditional")}>Conditional</button>
        </div>
    )
}

export default Effect
