import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Import Components
import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    firstRow: {
       
    },
    secondRow: {
        backgroundColor: 'yellow',
    },
    secondRow2: {
        backgroundColor: 'royalBlue',
    },
    thirdRow: {
        backgroundColor: 'gray',
    },
    thirdRow2: {
        backgroundColor: 'khaki',
    },
    thirdRow3: {
        backgroundColor: 'pink',
    },
}));

const GridLayout = () => {

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12} className={classes.firstRow} >
                    <NavBar />
                </Grid>
                <Grid item xs={12} md={6} className={classes.secondRow} >
                    Hello World 2
                </Grid>
                <Grid item xs={12} md={6} className={classes.secondRow2} >
                    Hello World 3
                </Grid>
                <Grid item xs={6} md={4} className={classes.thirdRow} >
                    Hello World 4
                </Grid>
                <Grid item xs={6} md={4} className={classes.thirdRow2} >
                    Hello World 5
                </Grid>
                <Grid item xs={12} md={4} className={classes.thirdRow3} >
                    Hello World 6
                </Grid>
            </Grid>
        </div>
    );
}

export default GridLayout;