import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';

const Filter = () => {
    const [image, setImage] = useState(null);
    image && console.log(URL.createObjectURL(image));
    return (
        <>
            {/* {
                image && <img alt="not found" width={"250px"} src={URL.createObjectURL(image)}/>
            }
            <input type="file" onChange={(event) => {setImage(event.target.files[0])}}/>
            <button onClick={() => setImage(null)}>Remove</button> */}
            {
                image && <img className='show-img' src={URL.createObjectURL(image)}/>
            }            
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <input type="range"/>
                </Grid>
                <Grid item xs={4}>
                    <input type="range"/>
                </Grid>
                <Grid item xs={4}>
                    <input type="range"/>
                </Grid>
            </Grid>
        </>
    );
};

export default Filter;