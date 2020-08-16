import React from 'react'
import { makeStyles, Theme } from '@material-ui/core';
import { Formik, Form} from 'formik'

const useStyles = makeStyles((theme: Theme) => ({
    NewTodoForm: {
        flexGrow: 1,
    },
}));

const NewTodoFrom: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.NewTodoForm}>
            
        </div>
    )
}

export default NewTodoFrom