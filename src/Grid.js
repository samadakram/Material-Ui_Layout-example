import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Import Components
import NavBar from './NavBar';
import Paper from './RepoPage';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    firstRow: {
       
    },
    secondRow: {
        backgroundColor: 'yellow',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
                <Grid item xs={12} className={classes.secondRow} >
                    <Paper />
                </Grid>
            </Grid>
        </div>
    );
}

export default GridLayout;