import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import ToastComment from "../../components/comment/Toast"
import MainLayout from "../../components/layout/Main"

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
    return (
    <MainLayout>
        <div className="row">
            <div className="col-md-8 offset-md-2">
        {
            !!post && (
                <div className='item'>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            )
        }
        <div>
            {
                comments.map((comment) => {
                    return (
                        <div className='mb-3' key={comment.id}>
                            <ToastComment item={comment}/>
                        </div>
                    )
                })
            }
        </div>
        </div>
        </div>
    </MainLayout>
    )
}

export default PostPage