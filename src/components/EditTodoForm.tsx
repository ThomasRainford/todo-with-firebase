import React from 'react'
import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    EditTodoForm: {
        flexGrow: 1,
    },
}))

const EditTodoForm: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.EditTodoForm}>

        </div>
    )
}

export default EditTodoForm