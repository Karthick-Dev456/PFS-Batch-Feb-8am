import React, { useState } from 'react'

const Forms = () => {

    const [user_name, setUserName] = useState("")
    const [user_password, setUserPassword] = useState("")

    const DataHandler = () => {
        console.log(user_name, user_password)

        // reset
        setUserName("")
        setUserPassword("")
    }

    return (
        <div>
            <form>

                <label>Username: </label>
                <input type="text" value={user_name} onChange={(event) => setUserName(event.target.value)} />

                <br /><br />

                <label>Password: </label>
                <input type="password" value={user_password} onChange={(event) => setUserPassword(event.target.value)} />

                <br /><br />

                <input type="button" value="Submit" onClick={DataHandler} />
                
            </form>
        </div>
    )
}

export default Forms
