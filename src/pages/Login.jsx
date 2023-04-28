import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import '../styles/login.css'

const Login = () => {
  return (
    <>
        <div className="login-section">
            <div className="container">
                <div className="row">
                <div className="tab-title text-center">
                            <Link>
                            ALREADY REGISTERED?
                            </Link>
                            <Link>
                            CREATE YOUR ACCOUNT
                            </Link>
                        </div>
                    <div className="login__wrapper">
                        <div className="login__body">
                            <form action="#">
                                <div className="login-title">
                                If you are already registered with Cartier, login here:
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>    
  )
}

export default Login