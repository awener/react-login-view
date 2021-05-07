import React, { ReactNode } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HouseIcon from '@material-ui/icons/House';
import { Link } from 'react-router-dom';

interface IProps {
    children: ReactNode;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const Layout = ({children} : IProps) => {
    const classes = useStyles();
    return (
        <div style={{  }}>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    
                    <Typography variant="h6" className={classes.title}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Link to={`/`}>
                                <HouseIcon style={{ color: 'white' }} />
                            </Link>
                        </IconButton>
                    </Typography>
                    <Button style={{ marginRight: '15px', color: 'white', border: '1px solid white' }} variant="outlined" color="secondary">
                        <Link to="/login" style={{ color: 'white' }}>Join</Link>
                    </Button>
                    </Toolbar>
                </AppBar>
        </div>
            <div>{children}</div>
        </div>
    )
}

export { Layout }