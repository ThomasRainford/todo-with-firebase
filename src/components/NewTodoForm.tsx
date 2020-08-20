import React from 'react'
import { makeStyles, Theme, TextField, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { Formik, Form } from 'formik'

const useStyles = makeStyles((theme: Theme) => ({
    NewTodoForm: {
        width: '100%',
        display: 'inline',
    },
}));

interface Todo {
    text: string
}

interface Props {
    onSubmit: (values: Todo) => void,
}

const NewTodoFrom: React.FC<Props> = (props: Props) => {
    const classes = useStyles()

    return (
        <div className={classes.NewTodoForm}>
            <Formik
                initialValues={{ text: '' }}
                onSubmit={(values, { resetForm }) => {
                    props.onSubmit(values)
                    resetForm()
                }}>
                {({ values, handleChange }) => (
                    <Form >
                        <TextField style={{width: '80%'}} placeholder="Add Todo" name="text" value={values.text} onChange={handleChange} />
                        <Button size="small" startIcon={<SaveIcon/>} style={{marginLeft: '3%'}} variant="outlined" color="primary" type="submit">Add</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default NewTodoFrom