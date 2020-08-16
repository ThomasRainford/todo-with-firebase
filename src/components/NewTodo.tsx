import React, { useState } from 'react'
import { makeStyles, Theme, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import NewTodoFrom from './NewTodoForm';

const useStyles = makeStyles((theme: Theme) => ({
    NewTodo: {
        flexGrow: 1,
        paddingTop: '1%',
    },
}));

interface Props {
    setTodos: Function
}

const NewTodo: React.FC<Props> = (props: Props) => {
    const classes = useStyles()

    const [displayInput, setDisplayInput] = useState<boolean>(false)
    const [newTodo, setNewTodo] = useState<string>('')

    const addTodo = () => { setDisplayInput(true) }


    return (
        <div className={classes.NewTodo}>
            <AddIcon color="primary" onClick={addTodo}/>
            {displayInput &&
                <NewTodoFrom />
            }
        </div>
    )
}

export default NewTodo