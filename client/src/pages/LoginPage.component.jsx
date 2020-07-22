import React from "react"

import SignIn from "../components/sign-in.component";
import SignUp from "../components/sign-up.component";
import NavBar from "../components/nav-bar.component"

const LoginPage = () => {
    return (
        <div>
            <NavBar />
            <div className="login-page">
                <SignIn />
                <SignUp />
            </div>
        </div>
    )
}

export default LoginPage;
