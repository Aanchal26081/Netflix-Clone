import React, { useState } from 'react'
import "./LoginScreen.css"
import SignUpScreen from './SignUpScreen';
function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img className="loginScreen_logo" src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png" alt="" />

                <button onClick={() => setSignIn(true)} className="loginScreen_button"
                >Sign In</button>

                <div className="loginScreen_gradient" />
            </div>
            <div className="loginScreen_body">
                {signIn ? (
                    <SignUpScreen/>
                ):(
                <>
                    <h1>Unlimited files, TV programes and more.</h1>
                    <h2>Watch anywhere. Cancel at any time</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="loginScreen_input">
                        <form >
                            <input type="email" placeholder="Email Adderss" />
                            <button onClick={() => setSignIn(true)} className="loginScreen_getStarted">Get Started</button>
                        </form>
                    </div>
                </>)}
                
            </div>
        </div>
    )
}

export default LoginScreen
