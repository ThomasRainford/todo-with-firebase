import React from 'react'
import { makeStyles, Theme, Button } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    TodoFilters: {
        flexGrow: 1
    },
    allButton: {
        margin: theme.spacing(1)
    },
    activeButton: {
        margin: theme.spacing(1)
    },
    completedButton: {
        margin: theme.spacing(1)
    }
}))

const TodoFilters: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.TodoFilters}>
            <Button className={classes.allButton} variant="contained" color="primary">All</Button>
            <Button className={classes.activeButton} variant="contained" color="primary">Active</Button>
            <Button className={classes.completedButton} variant="contained" color="primary">Completed</Button>
        </div>
    )
}

export default TodoFilters