import React, { useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import NewTodoFrom from './NewTodoForm';

const useStyles = makeStyles((theme: Theme) => ({
    NewTodo: {
        flexGrow: 1,
        paddingTop: '1%',
    },
}));

interface Todo {
    text: string
}

interface Props {
    addTodo: Function
}

const NewTodo: React.FC<Props> = ({ addTodo }) => {
    const classes = useStyles()

    const [displayInput, setDisplayInput] = useState<boolean>(false)

    const doAddTodo = () => { setDisplayInput(true) }

    return (
        <div className={classes.NewTodo}>
            <AddIcon color="primary" onClick={doAddTodo} />
            {displayInput &&
                <NewTodoFrom onSubmit={(values) => {
                    addTodo(values)
                }} />
            }
        </div>
    )
}

export default NewTodo