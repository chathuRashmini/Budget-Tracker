import React from 'react'
import { Card, CardContent, CardHeader, Typography, Grid, Divider } from '@material-ui/core'

import useStyles from './styles'
import Form from './form/Form'

const Main = () => {

    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardHeader
                title="Expense Tracker"
                subheader="Power By Speechly"
            />

            <CardContent>
                <Typography align='center' variant='h5'>
                    Total Balance $100
                </Typography>
                
                <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    Info Card Component
                </Typography>

                <Divider />

                <Form />
            </CardContent>

            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p>LIST COMPONENT</p>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
