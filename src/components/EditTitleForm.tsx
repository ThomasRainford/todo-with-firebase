import React from 'react'
import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    EditTitleForm: {

    }
}))

const EditTitleForm: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.EditTitleForm}>

        </div>
    )
}

export default EditTitleForm