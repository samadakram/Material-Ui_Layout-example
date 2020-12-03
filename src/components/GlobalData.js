import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Countup from 'react-countup';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            height: theme.spacing(16),
        },
    },
}));

export default function GlobalData() {
    const classes = useStyles();

    const loading = "Loading..."
    const [globalData, setGlobalData] = useState({});
    const [dataLoading, setDataLoading] = useState(false);

    useEffect(() => {
        async function fetchGlobalData() {
            setDataLoading(true);
            const apiResponse = await fetch('https://covid19.mathdro.id/api');

            const dataFromApi = await apiResponse.json();
            console.log(dataFromApi);
            setGlobalData(dataFromApi);
            setDataLoading(false);
        }
        fetchGlobalData();
    }, []);

    if (dataLoading) {
        return <div className={classes.root}>
            <Paper elevation={3}>
                <Typography variant="h4" gutterBottom>
                    {loading}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Global Data as of Today
            </Typography>
            </Paper>
            <Paper elevation={3}>
                <Typography variant="h4" gutterBottom style={{ color: 'green', }}>
                    {loading}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Recoverd
            </Typography>
            </Paper>
            <Paper elevation={3}>
                <Typography variant="h4" gutterBottom style={{ color: 'red', }}>
                    {loading}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Deaths
            </Typography>
            </Paper>
        </div>
    }

    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <Typography variant="h4" gutterBottom>
                    <Countup start={0} end={globalData.confirmed ? globalData.confirmed.value : 0} duration={2} separator="," />
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Global Data as of Today
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <Typography variant="h4" gutterBottom style={{ color: 'green', }}>
                    <Countup start={0} end={globalData.recovered ? globalData.recovered.value : 0} duration={2} separator="," />
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Recoverd
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <Typography variant="h4" gutterBottom style={{ color: 'red', }}>
                    <Countup start={0} end={globalData.deaths ? globalData.deaths.value : 0} duration={2} separator="," />
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Deaths
                </Typography>
            </Paper>
        </div>
    );
}
