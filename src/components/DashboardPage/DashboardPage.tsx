import React, { useEffect, useState } from 'react'
import { Theme, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import NavBar from '../NavBar'
import TodoContainer from '../TodoContainer'
import useFirebaseFirestorePull from '../../hooks/useFirebaseFirestorePull'
import { auth } from 'firebase'

const useStyles = makeStyles((theme: Theme) => ({

}))


const DashboardPage: React.FC = () => {
    const classes = useStyles()

    const history = useHistory()

    const [{ allTodos }, pullTodos] = useFirebaseFirestorePull()
    const [index, setIndex] = useState<number>(1)

    const getCurrentUsername = (): string | null | undefined => {
        return auth().currentUser?.displayName
    }

    useEffect(() => {
        if(!getCurrentUsername()) {
            alert('Please log in!')
            history.push('/login')
        } else {
            pullTodos()
        }
    }, [history, pullTodos])

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