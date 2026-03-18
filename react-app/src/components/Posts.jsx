import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Posts = () => {

    const navigate = useNavigate()

    const [posts, setPosts] = useState([])

    const DeletePost = id => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const post_list = posts.map((post, index) => {
        return (
            <tr key={post.id}>
                <td>{index + 1}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                    <button onClick={() => navigate(`/post/view/${post.id}`, {state: post})}>View</button>
                    <button onClick={() => navigate(`/post/update/${post.id}`)}>Update</button>
                    <button onClick={() => DeletePost(post.id)}>Delete</button>
                </td>
            </tr>
        )
    })


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response.data)
            setPosts(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {post_list}
                </tbody>
            </table>
        </div>
    )
}

export default Posts
