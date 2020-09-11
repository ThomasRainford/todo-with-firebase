import React from 'react'
import { Theme, makeStyles, Card, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    HomePage: {
        flexGrow: 1,
    },
}))


const HomePage: React.FC = () => {
    const classes = useStyles()

    return (
        <Card>
            <Typography>Home Page</Typography>
        </Card>
    )
}

export default HomePage