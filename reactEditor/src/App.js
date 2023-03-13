import React, {useState} from "react";
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';



// components
import Filter from "./components/Filter";
import Image from "./components/Image";
import Upload from "./components/Upload";

function App() {
  const [image, setImage] = useState(null);
  image && console.log(image);
  return (
    <Container maxWidth="lg" sx={{background: "cyan"}}>
      <Grid container>
        <Grid item>
          <Box sx={{width: "300px", height: "200px"}}>
            <Filter />
          </Box>
        </Grid>
        <Grid item>
          <Image image={image}/>
        </Grid>
        <Grid item>
          <Upload upload={{image, setImage}}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
