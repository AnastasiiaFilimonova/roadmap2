import { useRouter } from "next/router"
import { useEffect, useState } from 'react'

const PostPage = () => {
    const router = useRouter()
    const post_id = router.query.post_id
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    useEffect(() => {
        if (!post_id) return
        fetch(`http://localhost:3001/posts/${post_id}`)
            .then(res => res.json())
            .then(data => {
                setPost(data.item)
            })
        fetch(`http://localhost:3001/comments?postId=${post_id}`)
            .then(res => res.json())
            .then(data => {
                setComments(data.items)
            })

    }, [post_id]
    )
    // const { id } = router.query
    return (<div className='container'>
        {
            !!post && (
                <div className='item'>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            )
        }
        <div className='row'>
            {
                comments.map((comment) => {
                    return (
                        <div className='col-md-3' key={comment.id}>
                            <div className='item'>
                                <h3>{comment.name}</h3>
                                <p>{comment.body}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    </div>)
}

export default PostPage