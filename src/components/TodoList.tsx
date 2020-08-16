import React from 'react'
import { List } from '@material-ui/core'
import TodoItem from './TodoItem'

const TodoList: React.FC = () => {
    return (
        <div className="TodoList">
            <List>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </List>
        </div>
    )
}

export default TodoList