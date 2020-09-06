import React from 'react'
import { Theme, makeStyles, Card, CardContent } from '@material-ui/core'
import TodoFilters from './TodoFilters'

const useStyles = makeStyles((theme: Theme) => ({
    TodoList: {
        flexGrow: 1,
    },
}))

interface Props {
    todosFolder: firebase.firestore.DocumentData
}

const TodoList: React.FC<Props> = ({ todosFolder }) => {
    const classes = useStyles()

    return (
        <Card>
            <CardContent>
                <TodoFilters todosFolder={todosFolder} />
            </CardContent>
        </Card>
    )
}

export default TodoList