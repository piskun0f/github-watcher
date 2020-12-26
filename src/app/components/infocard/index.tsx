import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

import VisibilityIcon from '@material-ui/icons/Visibility';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';

import './styles.css';


interface InfoCardProps {
    name: string
    watchsCount: string
    starsCount: string
    forksCount: string
    link: string
}

export default class InfoCard extends React.Component<InfoCardProps> {
    constructor(props: InfoCardProps) {
        super(props);
    }

    render() : JSX.Element {
        return (
            <Card>
                <CardContent>
                    <Typography color="textSecondary" variant="h5">
                        { this.props.name }
                    </Typography>
                    <div id='info'>
                        <Chip
                            icon={<VisibilityIcon />}
                            label={ this.props.watchsCount }
                        />
                        <Chip
                            icon={<StarBorderIcon />}
                            label={ this.props.starsCount }
                        />
                        <Chip
                            icon={<DeviceHubIcon />}
                            label={ this.props.forksCount }
                        />
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small" href={ this.props.link }>View on Github</Button>
                </CardActions>
            </Card>
        );
    }
}
