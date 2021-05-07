import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { authContext } from './AuthComponent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}),
);

const LoginComponent = () => {
    const classes = useStyles();
    const auth = useContext(authContext);
    const history = useHistory();
    const [user, setUser] = useState({ username: '', password: '' });
    const [ validate, setValidate] = useState({ username: false, password: false});

    const changeLogin = (e: any) => {
        setUser(prevStatus => ({ ...prevStatus, [e.target.name]: e.target.value }));
        setValidate(prevState => ({...prevState, [e.target.name]: false }));
    }

    const validater = () => {
        let validated = true;
        if (!user.username.length) {
            setValidate(prevState => ({...prevState, username: true }));
            validated = false;
        }
        if (!user.password.length) {
            setValidate(prevState => ({...prevState, password: true }));
            validated = false;
        }
        if (validated) {
            auth.username = user.username;
            history.push('/');
        }
        
    }
    
    return (
        <div className="main">
            <div className="box">
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                            <TextField id="outlined-basic-username" label="Username" variant="outlined" name="username" onChange={changeLogin} value={user.username} error={validate.username}/>
                    </div>

                    <div>
                        <TextField id="outlined-basic-password" label="Password" variant="outlined" type="password" name="password" onChange={changeLogin} value={user.password} error={validate.password} />
                    </div>

                    <div>
                        <Button fullWidth={true} variant="contained" color="secondary" onClick={validater}>Login</Button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export { LoginComponent }