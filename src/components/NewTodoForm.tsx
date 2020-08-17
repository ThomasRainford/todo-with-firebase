import React from 'react'
import { makeStyles, Theme, TextField, Button } from '@material-ui/core';
import { Formik, Form } from 'formik'

const useStyles = makeStyles((theme: Theme) => ({
    NewTodoForm: {
        flexGrow: 1,
    },
}));

interface Todo {
    text: string
}

interface Props {
    onSubmit: (values: Todo) => void
}

const NewTodoFrom: React.FC<Props> = (props: Props) => {
    const classes = useStyles()

    return (
        <div className={classes.NewTodoForm}>
            <Formik
                initialValues={{ text: '' }}
                onSubmit={(values) => {
                    props.onSubmit(values)
                }}>
                {({values, handleChange}) => (
                    <Form>
                        <TextField placeholder="Add Todo" name="text" value={values.text} onChange={handleChange}/>
                        <Button type="submit">Add</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default NewTodoFrom