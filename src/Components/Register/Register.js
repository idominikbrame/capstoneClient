import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Register.css'
import {Navigate} from "react-router-dom";

const Register = () => {

    //Fetch Users from Express Back End
    const [loggedIn, setLoggedIn] = useState(false)

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')

    const registerUser = () => {
        axios({
            method: 'post',
            url: 'https://render-news.herokuapp.com/register',
            data: ({
                email: email,
                password: password,
                first_name: firstName,
                last_name: lastName,
            })
        })
            .then(response => {
               console.log(response)

            })
    };

    const authSuccessful = () => {
        setLoggedIn(true)
        document.cookie = `loggedIn=true;max-age=60*1000`
    }

    useEffect(() => {

    }, [])

    //CheckLoginCredentials


    useEffect(() => {
        console.log(
            password,
            email,
            confirmPassword,
            firstName,
            lastName
            )
    })


    //Return Login UI
    if (!loggedIn) {
        return (
            <div className={'form-container'}>
                <h1>Register Page</h1>
                <form>
                    <label>First Name: </label>
                    <input placeholder={"Alex"} onChange={(e) => setFirstName(e.target.value)}/>
                    <label>Last Name: </label>
                    <input placeholder={"Appleseed"} onChange={(e) => setLastName(e.target.value)}/>
                    <label>Email: </label>
                    <input placeholder={"example@email.com"} onChange={(e) => setEmail(e.target.value)}/>
                    <label>Password: </label>
                    <input placeholder={"password"} onChange={(e) => setPassword(e.target.value)}/>
                    <label>Confirm Password: </label>
                    <input placeholder={"password"} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <input type={"button"} onClick={registerUser} value={"Register"}/>
                </form>
            </div>
        );
    } else {
        return <Navigate replace to={'/top-headlines'} />
    }

};

export default Register;