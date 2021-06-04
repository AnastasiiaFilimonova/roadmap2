import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Link from "next/link"
import MainLayout from "../../components/layout/Main"
import PostCard from "../../components/card/Post"

const UserPage = () => {
    const router = useRouter()
    const user_id = router.query.user_id
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])
    useEffect(() => {
        if (!user_id) return
        fetch(`http://localhost:3001/users/${user_id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data.item)
            })
        fetch(`http://localhost:3001/posts?userId=${user_id}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data.items)
            })
    }, [user_id])
    console.log(user_id, user)
    return (
        <MainLayout>
            {!!user && (
                <div className="user">
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            )}
            <div className='row'>
                {posts.map((post) => {
                    return (
                        <div className="col-md-6" key={post.id}>
                            <PostCard url={`/posts/${post.id}`} item={post}/>
                        </div>
                    )
                })}
            </div>
       </MainLayout>
    )
}

export default UserPage