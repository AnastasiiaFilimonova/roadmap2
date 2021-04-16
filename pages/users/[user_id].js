import { useRouter } from "next/router"
import { useState, useEffect } from "react"
const UserPage = () => {
    const router = useRouter()
    const user_id = router.query.user_id
    const [user, setUser] = useState(null)
    useEffect(() => {
        if (!user_id) return
        fetch(`http://localhost:3001/users/${user_id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data.item)
            })
    }, [user_id])
    console.log(user_id, user)
    return (
        <div className="container">
        {!!user && (
            <div className="user">
               <h2>{user.name}</h2>
               <p>{user.email}</p>
            </div>
        )}
        </div>
    )
}

export default UserPage