import React from 'react';

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

import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function HeroHomepage() {
  return(
    <Card variant="outlined">
    
    <CardMedia
      component="img"
      height="194"
      image="/images/cover.png"
      alt="Paella dish"
    />
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500], width:60, height:60 }} aria-label="recipe">
          Lavish Salon
        </Avatar>
      }
      
      title="Lavish Salon"
      subheader={<Typography variant='subtitle1'>เวลาเปิดทำการ: 09.00 - 21.00 (จันทร์ - อาทิตย์)</Typography>}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      
    </CardActions>
    
  </Card>
  );
}
