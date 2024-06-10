import "./User.css"

const User = ({ id, name }) => {
    return (
        <div className="user-component">
            <div className="id">{id}</div>
            <div>{name}</div>
        </div>
    );
}

export default User;