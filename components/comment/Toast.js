const ToastComment = ({item}) => {
const {name, email, body}=item
    return (
        <div className="toast show w-auto">
        <div className="toast-header">
          <strong className="me-auto">{name}</strong>
          <small>{email}</small>
        </div>
        <div className="toast-body">{body}</div>
      </div>
       
    )
}

export default ToastComment