import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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

    const [globalData, setGlobalData] = useState({});

    // FetchData func
    
    // useEffect( ()=>{
    //     const fetchGlobalData = async () =>{
    //         try {
    //             const apiResponse = await fetch(globalData);
    //             const dataFromApi = await apiResponse.json();
    //             console.log("Data =>",dataFromApi);
    //             console.log("Data =>",dataFromApi.confirmed.value);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchGlobalData();
    // },[]);

    useEffect( ()=>{
        async function fetchGlobalData(){
            const apiResponse = await fetch('https://covid19.mathdro.id/api');

            const dataFromApi = await apiResponse.json();
            console.log(dataFromApi);
            setGlobalData(dataFromApi);
        }
        fetchGlobalData();
    },[]);

    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <Typography variant="h4" gutterBottom>
                {globalData && globalData.confirmed && globalData.confirmed.value}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Global Data as of Today
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <Typography variant="h4" gutterBottom style={{color: 'green',}}>
                {globalData && globalData.recovered && globalData.recovered.value}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Recoverd
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <Typography variant="h4" gutterBottom style={{color: 'orange',}}>
                    1000
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Active
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <Typography variant="h4" gutterBottom style={{color: 'red',}}>
                    1000
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Deaths
                </Typography>
            </Paper>
        </div>
    );
}
