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
    todos: Todo[],
    setTodos: Function
}

const NewTodo: React.FC<Props> = (props: Props) => {
    const classes = useStyles()

    const [displayInput, setDisplayInput] = useState<boolean>(false)

    const addTodo = () => { setDisplayInput(true) }

    return (
        <div className={classes.NewTodo}>
            <AddIcon color="primary" onClick={addTodo}/>
            {displayInput &&
                <NewTodoFrom onSubmit={(values) => {
                    props.todos.push(values)
                    props.setTodos(props.todos)
                    console.log(props.todos)
                }}/>
            }
            
        </div>
    )
}

export default NewTodo