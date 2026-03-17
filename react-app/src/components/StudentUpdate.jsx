import React from 'react'
import { useParams } from 'react-router-dom'

const StudentUpdate = () => {

    const { id } = useParams()

    console.log(id)

    return (
        <div>
            <h1>Update Student</h1>
        </div>
    )
}

export default StudentUpdate
