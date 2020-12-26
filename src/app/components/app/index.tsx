import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import InfoCard from '../infocard';

import './styles.css';

export class App extends React.Component {
    render() : JSX.Element {
        return (
            <>
                <Fab
                    color="primary"
                    aria-label="add"
                    style={{
                        margin: 0,
                        top: 'auto',
                        left: 'auto',
                        right: 20,
                        bottom: 20,
                        position: 'fixed'
                    }}
                >
                    <AddIcon />
                </Fab>
                <Grid container justify='center'>
                    <Grid container spacing={3} style={{ margin: 0, width: '100%' }} xs={12} sm={12} md={10} lg={8} xl={8}>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard />
                        </Grid>
                    </Grid>
                </Grid>
            </>
        );
    }
}
