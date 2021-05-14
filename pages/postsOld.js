import { useState, useEffect } from "react"

const PostPage = () => {
    const [posts, setPosts] = useState([])
    useEffect (()=>{
        fetch('http://localhost:3001/posts')
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            setPosts(data.items)
        })
        
    }, [])
    return "Posts: " + posts.length
}

export default PostPage