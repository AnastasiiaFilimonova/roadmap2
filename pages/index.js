import { useEffect, useState } from "react"
import Link from "next/link"

const indexPage = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data.items)
            })
    },
        [])
    return (
        <div className="container">
            <div className="row">
                {
                    users.map(user => {
                        return (
                            <div className='col-md-3' key={user.id}>
                                <div className="user">
                                    <h3>{user.name}</h3>
                                    <p>{user.email}</p>
                                    <Link href={`/users/${user.id}`}><a>follow</a></Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default indexPage