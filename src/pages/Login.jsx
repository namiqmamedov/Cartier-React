import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import {Modal} from '@mui/material'
import {Box} from '@mui/material'
import {Typography} from '@mui/material'
import {AiOutlineClose} from 'react-icons/ai'
import '../styles/login.css'


const Login = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    

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
                                <div className="email">
                                <p className='form-required-text'>
                                Required field*
                                </p>
                                <TextField id="standard-basic" label="Email" type='email' variant="standard" placeholder='your@email.com' />
                                </div>
                                <div className="password">
                                <TextField id="standard-basic" label="Password" type='password' variant="standard" placeholder='*****' />
                                </div>
                                <div className="forgot-password">
                                    <Link onClick={handleOpen}>
                                        Forgot your password?
                                    </Link>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description">
                                        <Box className='modal__forgot-pass'>
                                            <div className="modal__top">
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                FORGOT YOUR PASSWORD
                                            </Typography>
                                            <div className="close-modal">
                                            <AiOutlineClose onClick={handleClose}/>
                                            </div>
                                            </div>
                                            <Typography className='modal-pass'
                                                id="modal-modal-description"
                                                sx={{
                                                mt: 2
                                            }}>
                                                <div className="modal__body">
                                                    <form action="#" method='POST'>
                                                    <p className='form-title'>Provide your account email address to receive an email to reset your password.</p>
                                                    <TextField className='forgot__email-input' id="standard-basic" label="Email" type='email' variant="standard" placeholder='Email address*' />
                                                    </form>
                                                    <Button type="submit" className='password__input mt-4' variant="text">SUBMIT REQUEST</Button>
                                                </div>
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </div>
                                <div className="cms-generic">
                                Read the
                                 <Link>
                                 Privacy Policy
                                 </Link>
                                  for further information
                                </div>
                                <div className="form-actions">
                                 <Button className='login-btn' variant="text" type='submit'>Login</Button>
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