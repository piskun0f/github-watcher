import React from 'react';

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
                    id='addNewCardBtn'
                    color="primary"
                    aria-label="add"
                >
                    <AddIcon />
                </Fab>
                <Grid container justify='center'>
                    <Grid id='cards' container item spacing={3} xs={12} sm={12} md={10} lg={8} xl={8}>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <InfoCard name='React' watchsCount='12k' forksCount='500' starsCount='200k' link='https://github.com/facebook/react' />
                        </Grid>
                    </Grid>
                </Grid>
            </>
        );
    }
}
