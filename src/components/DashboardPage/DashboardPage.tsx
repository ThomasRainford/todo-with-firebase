import React, { useEffect, useState } from 'react'
import { Theme, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import NavBar from '../NavBar'
import TodoContainer from '../TodoContainer'
import useFirebaseFirestorePull from '../../hooks/useFirebaseFirestorePull'
import { auth } from '../../firebase'

const useStyles = makeStyles((theme: Theme) => ({

}))

const DashboardPage: React.FC = () => {
    const classes = useStyles()

    const history = useHistory()

    const [{ allTodos }, pullTodos] = useFirebaseFirestorePull()
    const [index, setIndex] = useState<number>(1)

    useEffect(() => {
        if (!auth.currentUser && !allTodos) {
            alert('Please log in!')
            history.push('/login')
        } else {
            pullTodos()
        }
    }, [])

    return (
        <div className="App">
            <NavBar />
            {allTodos &&
                <TodoContainer allTodos={allTodos} index={index} />
            }
        </div>
    )
}

export default DashboardPage