import React, {useState, useEffect} from 'react'
import { UseStyles } from '../../orgsdata';
import { Grid } from '@material-ui/core';
import { Organisations2020 } from './orgs2020data';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Button } from '@material-ui/core';
import { maxWidth } from '@mui/system';

export default function Orgs2020() {
    const {root, cards, cardWrapper, Media, gridContainer} = UseStyles();

    const [state, setState] = useState({
        mobileView: false,
      });
    
    const { mobileView } = state;

    useEffect(() => {
    const setResponsiveness = () => {
        return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
        window.removeEventListener("resize", () => setResponsiveness());
    };
    }, []);

    const displayDesktop = () => {
        return (
            <div>
                {Organisations2020.map(orgs => (
                    <Grid container spacing={6} className={gridContainer}>
                        <Grid item xs={12} sm={6} md={12}>
                        <Card className={cardWrapper}>
                            <CardMedia

                                component="img"
                                // width="45px"
                                height="50"
                                // width="100"
                                className={Media}
                                image={orgs.logo}
                                alt=""
                            />
                            <CardHeader
                            title={orgs.name}
                            subheader={orgs.text}
                            />
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                            </CardActions>
                        </Card>
                        </Grid>
                        
                    </Grid>
                        
                        ))}
            </div>
        );
      };
    
    const displayMobile = () => {
        return (
            <div>
                {Organisations2020.map(orgs => (
                    <Grid container spacing={6} className={gridContainer}>
                        <Grid item xs={12} sm={6} md={12}>
                        <Card className={cardWrapper}>
                            <CardMedia

                                component="img"
                                // width="45px"
                                height="50"
                                // width="100"
                                className={Media}
                                image={orgs.logo}
                                alt=""
                            />
                            <CardHeader
                            title={orgs.name}
                            subheader={orgs.text}
                            />
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                            </CardActions>
                        </Card>
                        </Grid>
                        
                    </Grid>
                        
                        ))}
            </div>
        );
    };

    return (
        <div className={root}>
            {mobileView ? displayMobile() : displayDesktop()}  
        </div>
        )
    }