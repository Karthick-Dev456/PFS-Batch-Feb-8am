import React from 'react'
import { useLocation } from 'react-router-dom'

const PostView = () => {

    const location = useLocation()

    const post_data = location.state

    return (
        <div>
            <h1>Title: {post_data.title}</h1>
            <p>Description: {post_data.body}</p>
        </div>
    )
}

export default PostView
