import React, { useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    NewTodo: {
        flexGrow: 1,
    },
}));

const NewTodo: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.NewTodo}>
            
        </div>
    )
}

export default NewTodo