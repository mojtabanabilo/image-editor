import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Upload = ({upload}) => {
    return (
        <Box sx={{background: "green"}}>
            <Button variant="contained">
                <label htmlFor="input-file">
                    upload image
                </label>
                <input 
                    type="file"
                    id="input-file" 
                    style={{display: "none"}} 
                    onChange={e => {upload.setImage(e.target.files[0])}}
                />
            </Button>
        </Box>
    );
};

export default Upload;