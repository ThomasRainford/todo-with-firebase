import React from 'react'
import { AppBar, Toolbar, Typography, Button, makeStyles, Theme } from '@material-ui/core'
import { auth } from 'firebase';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
    NavBar: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        marginLeft: '1%',
    },
    navbarButtons: {

    },
}));

const NavBar: React.FC = () => {
    const classes = useStyles()
    const history = useHistory()

    const signOut = () => {
        auth().signOut()
        .then(() => {
            history.push('/')
        })
    }

    return (
        <div className={classes.NavBar}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography className={classes.title} variant="h6">ToDoApp</Typography>
                    <div className={classes.navbarButtons}>
                        <Button
                            color="inherit"
                            onClick={() => {signOut()}}>
                            Log Out</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar