import React from 'react'
import { useLocation } from 'react-router-dom'

const Data = () => {

    const location = useLocation()
    console.log(location.state)

    const data_set = location.state

    const {name} = data_set

    return (
        <div>
            <h1>Data</h1>
            <h2>Person Name: {name}</h2>
        </div>
    )
}

export default Data
