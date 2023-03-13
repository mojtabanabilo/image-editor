import React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Slider from '@mui/material/Slider';

const Filter = () => {
    return (
        <Box maxWidth={200} sx={{background: "blue"}}>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </Box>                                
    );
};

export default Filter;