import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Login.css'
import {Link, Navigate} from "react-router-dom";

const Login = () => {

    //Fetch Users from Express Back End
    const [loggedIn, setLoggedIn] = useState(false)
    const fetchUser = () => {
        axios({
            method: 'post',
            url: 'https://render-news.herokuapp.com/aws',
            data: ({
                email: email,
                password: password
            })
        })
            .then(response => {
                if(Object.values(response.data)[0] === "access granted") {
                    console.log(Object.values(response.data)[0] === "access granted")
                    authSuccessful()
                }

            })
    };

    const authSuccessful = () => {
        setLoggedIn(true)
        document.cookie = `loggedIn=true;max-age=60*1000`
    }

    useEffect(() => {

    }, [])

    //CheckLoginCredentials
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    //Return Login UI
    if (!loggedIn) {
        return (
            <div className={'form-container'}>
                <h1 id={'few-clicks'}>Your News Just A Few Clicks Away</h1>
                <h2>Login</h2>
                <form>
                    <label>Email: </label>
                    <input placeholder={"example@email.com"} onChange={(e) => setEmail(e.target.value)}/>
                    <label>Password: </label>
                    <input placeholder={"password"} onChange={(e) => setPassword(e.target.value)}/>
                    <input type={"button"} onClick={fetchUser} value={"Login"}/>
                    <Link exact to={'/register'}> <input type={"button"} value={"Register"}/></Link>

                </form>
            </div>
        );
    } else {
        return <Navigate to={'/top-headlines'} />
    }

};

export default Login;