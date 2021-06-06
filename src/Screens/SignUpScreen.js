import React, { useRef } from 'react'
import { auth } from '../firebase';
import "./SignUpScreen.css"

function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);
        })
        .catch((error)=>{
            alert(error.message);
        })
    };
    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            ).then((authUser)=>{
                console.log(authUser);
            })
            .catch((error)=>{
                alert(error.message);
            })
    }
    return (
        <div className="signupScreen">
            <form>
                <h1>Sign in</h1>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="password" />
                <button type="submit" onClick={signIn}>Sign In</button>

                <h4 onClick={register}>New to Netflix? Sign Up Now</h4>
                {/* <h4><span className='signupScreen_gray'>New to Netflix?</span> Sign Up Now</h4> */}
                {/* <h4>
                    <span className='signupScreen_gray' color="grey">New to Netflix?</span> 
                    <span className="signupScreen_link">Sign Up Now</span>
                </h4> */}
            </form>
        </div>
    )
}

export default SignUpScreen
