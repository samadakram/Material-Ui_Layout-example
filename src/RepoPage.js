import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(50),
            minHeight: theme.spacing(50),
        },

    },
}));

export default function SimplePaper() {
    const classes = useStyles();

    const [repos, setRepos] = useState([{}]);

    useEffect(() => {
        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/samadakram/repos");
            const data = await response.json();
            setRepos(data);
        };
        fetchRepos();
    });

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                <h2>My Github Repos</h2>
                <ol>
                    {repos.map((repoObj, ind) => {
                        return (
                            <li key={ind}>{repoObj.name}</li>
                        )
                    })}
                </ol>
            </Paper>
        </div>
    );
}