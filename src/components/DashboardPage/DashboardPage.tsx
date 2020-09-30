import React, { useEffect, useState, useContext } from 'react'
import { Theme, makeStyles, CircularProgress } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import NavBar from '../NavBar'
import TodoContainer from '../TodoContainer'
import useFirebaseFirestorePull from '../../hooks/useFirebaseFirestorePull'
import { auth, db } from '../../firebase'

const useStyles = makeStyles((theme: Theme) => ({
    DashboardPage: {

    },
    todoList: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    todoProgress: {
        marginTop: '25%',
    }
}))

const DashboardPage: React.FC = () => {
    const classes = useStyles()

    const history = useHistory()

    const [{ allTodos }, pullTodos] = useFirebaseFirestorePull()
    const [index, setIndex] = useState<number>(1)
    const [empty, setEmpty] = useState<boolean>(false)

    const checkListDoc = () => {
        auth.onAuthStateChanged(async (user) => {
            if (user !== null) {
                const doc = await db.collection('users').doc(user.uid).get()
                if (doc.data() === {}) {
                    setEmpty(true)
                }
            } else {
                console.log("PROBLEM")
            }
        })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user) {
                alert('Please log in!')
                history.push('/login')
            }
        })
        pullTodos()

        checkListDoc()

        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <div className={classes.DashboardPage}>
            <NavBar />

            {allTodos ?
                <TodoContainer allTodos={allTodos} index={index} />
                : <div className={classes.todoList}>
                    <CircularProgress className={classes.todoProgress} />
                </div>
            }
        
        </div>
    )
}

export default DashboardPage