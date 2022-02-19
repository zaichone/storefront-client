import React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import BottomNav from './BottomNav';
import Header from './Header';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Layout = ({ children }) => {
    return (
        <div>
            <Header/>
            
            <Grid container spacing={0}>
                
                <Grid item xs={12} md={12}>
                   {children}
                </Grid>
            </Grid>
            <BottomNav />
        </div>
    )
}

export default Layout
