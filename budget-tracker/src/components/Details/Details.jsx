import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'

import useStyles from './styles'
import useTransactions from '../../useTransactions'

const Details = ({ title }) => {

    const classes = useStyles();
    const { total, chartData } = useTransactions(title)

    return (
        <Card className={ title === "Income" ? classes.income : classes.expense }>
            <CardHeader
                title={title}
            />

            <CardContent>
                <Typography variant='h5'>${total}</Typography>

                {/* <Doughnut
                    data={chartData}
                /> */}
            </CardContent>
        </Card>
    )
}

export default Details


// category_income = [
//     Business
//     Salary
// ]

// category_expense = [
//     Bills
//     Car
// ]

// *add_income {Add} income {[for | of]} $SPEECHLY.NUMBER(amount) {dollors} {in} {category} $category_income(category) {for} $SPEECHLY.DATE(date)