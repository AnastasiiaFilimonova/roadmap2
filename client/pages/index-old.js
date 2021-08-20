import { useEffect, useState } from "react"
import Link from "next/link"
import MainLayout from "../components/layout/Main"
import Avatar from "../components/user/Avatar"

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
       <MainLayout>
            <div className="row">
                {
                    users.map(user => {
                        return (
                            <div className='col-md-3' key={user.id}>
                                <Avatar item={user} url={`/users/${user.id}`}/>
                                
                            </div>
                        )
                    })
                }
            </div>
        </MainLayout>
    )
}

export default indexPage