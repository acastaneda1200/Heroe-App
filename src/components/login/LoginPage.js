import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'

export const LoginPage = ({history}) => {
    const {dispatch} = useContext(AuthContext)

    const handleLogin = () => {
       /*  history.push("/"); */
        

        dispatch({
            type: '[auth] login',
            payload: {
                    name: 'Adrian Castañeda'
            }
        })
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
