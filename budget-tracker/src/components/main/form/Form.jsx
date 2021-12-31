import React, { useState } from 'react'
import { Typography, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

import useStyles from './styles'

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: new Date()
}

const Form = () => {

    const classes = useStyles()
    const [formData, setformData] = useState(initialState)
    console.log(formData)

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom>
                    Say what you want
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>

                    <Select 
                        value={formData.type}
                        onChange={(e) => setformData({ ...formData, type: e.target.value})}
                    >
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>

                    <Select
                        value={formData.category}
                        onChange={(e) => setformData({ ...formData, category: e.target.value})}
                    >
                        <MenuItem value="Business">Business</MenuItem>
                        <MenuItem value="Salary">Salary</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <TextField 
                    type="number" 
                    label='amount' 
                    fullWidth 
                    value={formData.amount}
                    onChange={(e) => setformData({ ...formData, amount: e.target.value})}
                />
            </Grid>

            <Grid item xs={6}>
                <TextField 
                    type="date" 
                    label='date' 
                    fullWidth
                    value={formData.date}
                    onChange={(e) => setformData({ ...formData, date: e.target.value})}
                />
            </Grid>

            <Button className={classes.button} variant='outlined' color='primary' fullWidth>
                Create
            </Button>
        </Grid>
    )
}

export default Form
