import React, { useState, useEffect } from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import {getPosts} from './actions/posts';
import { useDispatch } from 'react-redux';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form'
import plants from './images/download.jpeg'
import useSytles from './styles';
const App = () => {
  const [currentId, setCurrentId] = useState(null);
    const classes = useSytles();
    const dispatch = useDispatch();
  
    useEffect(() => {
  dispatch(getPosts());
}, [currentId,dispatch]);

    return (
        <Container maxidth = "lg">
        <AppBar className={classes.appBar} position = "static" color = "inherit">
        <img className={classes.image} src={plants} alt= "garden" height="60"/>
    <Typography className={classes.heading} variant= "h2" align = "center">My Garden</Typography>
    <img className={classes.image} src={plants} alt= "garden" height="60"/>
    </AppBar>
    <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
            <Posts setCurrentId = {setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
             <Form currentId ={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>


        </Container>
       
    )
}
export default App;