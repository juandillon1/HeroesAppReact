import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
    const {dispatch} = useContext(AuthContext);

    const handleClick = () => {
        const lastPath = localStorage.getItem('lastpath') || '/';
        // history.push('/');
        history.replace(lastPath);
        dispatch({
            type: types.login,
            payload: {
                name: 'Juan'
            }
        });
    };
    return (
        <div>
            <h1>Login</h1>
            <hr />
            <button className="btn btn-primary m-3" onClick={handleClick}>Ingresar</button>
        </div>
    )
}
