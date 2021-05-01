import React from 'react'

export const LoginPage = ({history}) => {

    const handleLogin = () => {
       /*  history.push("/"); */
        history.replace("/");
    }
    return (
        <div className="container m-5">
            <h1>LoginPage</h1>
            <hr/>

            <button className="btn btn-primary"
                    onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
