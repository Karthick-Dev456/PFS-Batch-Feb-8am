import React, { useState } from 'react'

const State = () => {

    let number = 10

    const ChangeNumber = () => {
        number = 20

        console.log(number)
    }

    const [student_name, setStudentName] = useState("Santhosh")

    return (
        <div>
            <h1>The number is {number}</h1>
            <button onClick={ChangeNumber}>Change Value</button>

            <h1>My name is {student_name}</h1>
            <button onClick={() => setStudentName("Gowtham")}>Change Name</button>
        </div> 
    )
}

export default State
