import React from 'react'
import { makeStyles, Theme, TextField, Button } from '@material-ui/core'
import { Formik, Form } from 'formik'

const useStyles = makeStyles((theme: Theme) => ({
    EditTitleForm: {

    }
}))

interface Todo {
    text: string
}

interface Props {
    onSubmit: (values: Todo) => void
    todoTitle: string
}

const EditTitleForm: React.FC<Props> = (props: Props) => {
    const classes = useStyles()

    return (
        <div className={classes.EditTitleForm}>
            <Formik initialValues={{ text: props.todoTitle }}
                onSubmit={(values) => {
                    props.onSubmit(values)
                }}>
                {({ values, handleChange }) => (
                    <Form>
                        <TextField style={{}} onChange={handleChange} name="text" value={values.text} />
                        <Button style={{ marginLeft: '3%', marginRight: '3%' }}
                            variant="outlined" color="primary" size="small" type="submit">Edit</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default EditTitleForm