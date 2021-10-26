import React, { useLocation, useHistory } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { googleSignin } = useAuth();
    // const location = useLocation();
    // const history = useHistory();
    // const redirect_uri = location.state?.from || '/';


    const handlesignin = () => {
        googleSignin()
            .then((result) => {
                // history.push(redirect_uri);
            })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" placeholder="Your Email" />
                    <br />
                    <input placeholder="Your Password" type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Amazon <Link to='/register'>Create Account</Link></p>
                <div>----------or---------</div>
                <button onClick={handlesignin} className='btn-regular'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;