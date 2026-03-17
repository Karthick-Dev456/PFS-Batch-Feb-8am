import React, { useState } from 'react'

const Conditional = () => {

    const [age, setAge] = useState('')

    const [result, setResult] = useState('')

    const DataHandler = () => {
        
        // if (age >= 18) {
        //     setResult(<p>You can vote</p>)
        // } else {
        //     setResult(<p>You can't vote</p>)
        // }

        // setResult(age >= 18 ? <p>You can vote</p> : <p>You can't vote</p>)

        setResult(age >=18 && <p>You can vote</p>)


    }

    return (
        <div>
            <label>Enter your age: </label>
            <input type="text" value={age} onChange={(event) => setAge(event.target.value)} />

            <br /><br />

            <input type="button" value="Submit" onClick={DataHandler} />

            {result}
                
        </div>
    )
}

export default Conditional
