import React from 'react'
import Orgs from '../orgs'
import { UseStyles } from '../orgsdata';
import dscnsec from '../../../images/orgimages/dscnsec.png'

import { Organisations2019 } from '../orgsdata';

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

export default function Orgs2019() {
    const {cards} = UseStyles();

    return (
        <div className={cards}>
            <div>
                {Organisations2019.map(orgs => (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            // width="45px"
                            height="194"
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
                    ))}
            </div>
        </div>
            
        
    )
}
