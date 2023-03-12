import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import { height } from '@mui/system';



const Filter = () => {
    const [image, setImage] = useState(null);
    image && console.log(image);
    return (
        <>
            <Container maxWidth='lg' sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Container>
                    <Box maxWidth={200}>
                        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                    </Box>                
                    <Box  maxWidth={200}>
                        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                    </Box>
                    <Box  maxWidth={200}>
                        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                    </Box>                
                </Container>
                <Container>
                    <Box sx={{
                        width: 300,
                        height: 400
                    }}>
                        {
                            image && <img 
                                src={URL.createObjectURL(image)} 
                                alt="user data"
                                style={{width: "inherit", height: "inherith"}}
                            />
                        }
                    </Box>
                </Container>
                <Container>
                    <Box>
                        <Button variant="contained">
                            <label htmlFor="input-file">
                                upload image
                            </label>
                            <input 
                                type="file"
                                id="input-file" 
                                style={{display: "none"}} 
                                onChange={e => {setImage(e.target.files[0])}}
                            />
                        </Button>
                    </Box>
                </Container>
            </Container>
        </>
    );
};

export default Filter;