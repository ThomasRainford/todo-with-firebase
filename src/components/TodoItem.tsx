import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'

const TodoItem: React.FC = () => {
    return (
        <div className="TodoItem">
            <ListItem>
                <ListItemText primary="Hello"></ListItemText>
            </ListItem>
        </div>
    )
}

export default TodoItem