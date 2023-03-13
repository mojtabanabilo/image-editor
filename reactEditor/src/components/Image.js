import React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

const Image = ({image}) => {
    return (
        <Box sx={{
            width: 300,
            height: 400,
            background: "Red"
        }}>
            {
                image && <img 
                     src={URL.createObjectURL(image)} 
                    alt="user data"
                    style={{
                        width: "inherit", 
                        height: "inherith", 
                        borderRadius: "10px"
                    }}
                />
            }
        </Box>
    );
};

export default Image;