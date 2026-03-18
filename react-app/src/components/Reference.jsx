import React, { useState } from 'react'
import { useRef } from 'react'

const Reference = () => {

    const usernameRef = useRef(null)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const SubmitData = () => {
        console.log(username, password)
        setPassword("")
        setUsername("")
        usernameRef.current.focus()
    }

    return (
        <div>
            <form>
                <label>Username: </label>
                <input type="text" ref={usernameRef} onChange={(event) => setUsername(event.target.value)} value={username} />
                <br />
                <br />
                <label>Password: </label>
                <input type="password" onChange={(event) => setPassword(event.target.value)} value={password} />
                <br />
                <br />
                <input type="button" value="Submit" onClick={SubmitData} />
            </form>
        </div>
    )
}

export default Reference
