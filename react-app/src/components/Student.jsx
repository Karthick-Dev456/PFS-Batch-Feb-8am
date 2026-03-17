import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'

const Student = () => {

    const navigate = useNavigate()

    const all_students = [
        {
            id: 1,
            name: "Santhosh",
            age: 22,
            branch: "CSE"
        },
        {
            id: 2,
            name: "Gowtham",
            age: 23,
            branch: "IT"
        },
        {
            id: 3,
            name: "Vishnu",
            age: 22,
            branch: "IT"
        },
        {
            id: 4,
            name: "Vishnu",
            age: 22,
            branch: "IT"
        },
        {
            id: 5,
            name: "Vishnu",
            age: 22,
            branch: "IT"
        }
    ]

    const student_list = all_students.map((student, index) => {
        return (
            <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.branch}</td>
                <td>
                    <button onClick={() => navigate(`/student/update/${student.id}`)}>Update</button>
                    <button>Delete</button>
                </td>
            </tr>
        )
    })

    return (
        <div>

            <table>

                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Branch</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {student_list}
                </tbody>

            </table>

        </div>
    )
}

export default Student