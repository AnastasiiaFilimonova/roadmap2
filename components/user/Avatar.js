import Link from "next/link"


const Avatar = ({ item, url }) => {
    const { username, email, id } = item
    return (
        <div className="text-center">
            <img className="bd-placeholder-img rounded-circle" src={`https://i.pravatar.cc/140?u=${id}`} />
            <h2 className="mt-3">{username}</h2>
            <p>{email}</p>
            <p><Link href={url}><a className="btn btn-secondary" >View details »</a></Link></p>
        </div>
    )
}

export default Avatar