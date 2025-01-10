export default function TopRLoginBtn({user, onLogin}) {
    return (
        <div className="TopRLoginBtn">
            {
                user? 
                <p>{user}</p>
                : <div className="loginBtn" onClick={onLogin}>LOGIN</div>
            }
        </div>
    )
}