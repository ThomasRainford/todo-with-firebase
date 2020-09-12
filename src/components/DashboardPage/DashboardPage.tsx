import React from 'react'
import { Theme, makeStyles, Typography, Avatar, Button, Paper } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    }
}))


const DashboardPage: React.FC = () => {
    const classes = useStyles()

    const history = useHistory()

    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Typography>Dashboard</Typography>
            </Paper>
        </main>
    )
}

export default DashboardPage