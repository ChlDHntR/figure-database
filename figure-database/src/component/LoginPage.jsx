import { useState, useContext } from "react";
import axios from "axios";
import { InputBar } from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from "../context/UserAuthProvider";


export default function LoginPage() {
    const [userName, setUserName] = useState('')
    const [pwd, setPwd] = useState('')
    const navigate = useNavigate()
    const { setCurrUser } = useContext(UserAuthContext)

    const handleLogin = () => {
        axios
        .get('http://localhost:3001/users')
        .then(response => {
            let userData = response.data
            console.log(userData, userName)
            let foundUser = userData.find(element => element.username === userName) 
            if (!foundUser || !(foundUser.pwd === pwd)) {
                alert('username or password is wrong')
                return
            }            
            setCurrUser(foundUser.username)
            alert('loging in')
            setTimeout(() => {
                navigate('/')
            }, 1000);
        })
    }

    return (
        <div className="loginBox">
            <div className="input">
                <label>User Name:</label> <br/>
                <input value={userName} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className="input">
                <label>Password:</label> <br/>
                <input value={pwd} type='password' onChange={(e) => setPwd(e.target.value)}/>
            </div>
            <button onClick={handleLogin}>LOGIN</button>
        </div>
    )
}