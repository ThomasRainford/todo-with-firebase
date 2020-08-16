import React from 'react'
import { AppBar, Toolbar, Typography, Button, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    NavBar: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.NavBar}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6">News</Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar