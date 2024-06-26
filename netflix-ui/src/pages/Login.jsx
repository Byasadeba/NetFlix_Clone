import React, { useState } from 'react'
import styled from "styled-components";
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [fromValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate()


    const handelLogIn = async () => {
        try {
            const { email, password } = fromValues;
            await signInWithEmailAndPassword(firebaseAuth, email, password)

        } catch (error) {
            console.log(error)
        }
    };


    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/")
    })


    return (
        <>
            <Container>
                <BackgroundImage />
                <div className="content">
                    <Header />
                    <div className="form-container flex column a-center j-center">
                        <div className="form flex column a-center j-center">
                            <div className="title">
                                <h3>Login</h3>
                            </div>
                            <div className="container flex column">
                                <input type="email" name="email" placeholder='Email Address' value={fromValues.email}
                                    onChange={(e) => setFormValues(
                                        {
                                            ...fromValues,
                                            [e.target.name]: e.target.value
                                        }
                                    )} />


                                <input type="password" name="password" placeholder='Password'
                                    value={fromValues.password}
                                    onChange={(e) => setFormValues(
                                        {
                                            ...fromValues,
                                            [e.target.name]: e.target.value
                                        }
                                    )}
                                />



                                <button onClick={handelLogIn}>Log In</button>


                            </div>
                        </div>
                    </div>
                </div>

            </Container >
        </>
    )
}

export default Login;



const Container = styled.div`
    position: relative;
    .content{
        position: absolute;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-rows:15vh 85vh;
        .form-container{
            gap: 2rem;
            height: 85vh;
            .form{
                padding: 2rem;
                background-color: #000000b0;
                width: 25vw;
                gap: 2rem;
                color: white;
                .container{
                    gap: 2rem;
                    input{
                        padding: 0.5rem 1rem;
                        width: 15rem;
                    }
                    button{
                        padding: 0.5rem 1rem ;
                        border: none;
                        background-color: #e50914;
                        color: white;
                        cursor: pointer;
                        font-weight: bolder;
                        border-radius: 0.2rem;
                        font-size: 1.05rem;
                    }
                }
            }
        }
    }
`;