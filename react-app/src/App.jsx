import React from "react"
import {Routes, Route} from "react-router-dom"

import Conditional from "./components/Conditional"
import Effect from "./components/Effect"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Data from "./components/Data"
import Student from "./components/Student"
import StudentUpdate from "./components/StudentUpdate"
import Posts from "./components/Posts"
import PostUpdate from "./components/PostUpdate"
import PostView from "./components/PostView"
import Reference from "./components/Reference"

const App = () => {

    return (
        <div>

            <Navbar />

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/conditional" element={<Conditional />} />
                <Route path="/effect" element={<Effect />} />
                <Route path="/data" element={<Data />} />
                <Route path="/student" element={<Student />} />
                <Route path="/student/update/:id" element={<StudentUpdate />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/post/update/:id" element={<PostUpdate />} />
                <Route path="/post/view/:id" element={<PostView />} />
                <Route path="/post/view/:id" element={<PostView />} />
                <Route path="/reference" element={<Reference />} />

            </Routes>
        </div>
    )
}

export default App