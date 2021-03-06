import React from 'react';
import {  Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography} from '@material-ui/core';


const useStyles= makeStyles((theme) => ({
  media: {
      height: 280,
      [theme.breakpoints.down("sm")]: {
          height: 150,
      }
  },
  card: {
      marginBottom: theme.spacing(5)
  }
}))

const Posts= () =>{
  const classes= useStyles()
  return(
   <Card className={classes.card}>
       <CardActionArea>
           <CardMedia 
                className={classes.media}
                image="https://images.pexels.com/photos/9459781/pexels-photo-9459781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title= "My Post"        
            />
            <CardContent>
                <Typography variant='h5' gutterBottom>My First Post</Typography>
                <Typography variant='body2'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat.
                   Duis aute irure dolor in reprehenderit in voluptate 
                   velit esse cillum dolore eu fugiat nulla pariatur. 
                   Excepteur sint occaecat cupidatat non proident, 
                   sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Typography>
            </CardContent>
       </CardActionArea>
       <CardActions>
           <Button size='small' color="primary">Share</Button>
           <Button size='small' color="primary">Learn More</Button>
       </CardActions>
   </Card>
 
  )
}

export default Posts;
