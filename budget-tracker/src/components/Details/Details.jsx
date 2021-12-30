import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'

const Details = () => {
    return (
        <Card>
            <CardHeader
                title="Income"
            />

            <CardContent>
                <Typography variant='h5'>$50</Typography>

                <Doughnut
                    data='Data'
                />
            </CardContent>
        </Card>
    )
}

export default Details
