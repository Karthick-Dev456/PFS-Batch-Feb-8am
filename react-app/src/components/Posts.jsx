import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Posts = () => {

    const [posts, setPosts] = useState([])

    const post_list = posts.map((post, index) => {
        return (
            <tr key={post.id}>
                <td>{index + 1}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
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
    })



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Description</th>
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
