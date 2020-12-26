import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default class InfoCard extends React.Component {
    render() : JSX.Element {
        return (
            <Card>
                <CardContent>
                    <Typography color="textSecondary" variant="h5">
                        ReactJS
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">VIEW ON GITHUB</Button>
                </CardActions>
            </Card>
        );
    }
}
