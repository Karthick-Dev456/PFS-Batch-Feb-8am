import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PostUpdate = () => {

    const params = useParams()

    console.log(params)

    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')

    const UpdatePost = () => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
            title: title,
            body: description
        })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then(response => {
            console.log(response.data)
            setDescription(response.data.body)
            setTitle(response.data.title)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <div>
            <form>
                <label>
                    Title
                </label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />

                <label>Description</label>
                <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />

                <input type="button" value="Update" onClick={UpdatePost} />
            </form>
        </div>
    )
}

export default PostUpdate
