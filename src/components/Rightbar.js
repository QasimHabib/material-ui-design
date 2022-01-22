import React from 'react';
import { Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';


const useStyles= makeStyles((theme) => ({
 container: {
   paddingTop: theme.spacing(10),
   position: "sticky",
   top: 0,
 },
 title: {
   fontSize: 16,
   fontWeight: 500,
   color: "#555",
 },
 link: {
   marginRight: theme.spacing(2),
   fontSize: 16,
   color: "#555"
 }
}))

const Rightbar= () =>{
  const classes= useStyles()
  return(
    <Container className={classes.container}>
     <Typography className={classes.title} gutterBottom>Online Friends</Typography>
     <AvatarGroup max={4} style={{marginBottom: 20}}>
        <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format" />
        <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/1.jpg" />
        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/2.jpg" />
        <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/3.jpg" />
        <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
     </AvatarGroup>
     <Typography className={classes.title} gutterBottom>Gallery</Typography>
     <ImageList rowHeight={150} cols={3} style={{marginBottom: 20}} >
        <ImageListItem >
          <img  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"/>
        </ImageListItem>
        <ImageListItem >
          <img  src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"/>
        </ImageListItem>
        <ImageListItem >
          <img  src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format"/>
        </ImageListItem>
        <ImageListItem >
          <img  src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format"/>
        </ImageListItem>
        <ImageListItem >
          <img  src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format"/>
        </ImageListItem>
        <ImageListItem >
          <img  src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format"/>
        </ImageListItem>
    </ImageList>
    <Typography className={classes.title} gutterBottom>Categories</Typography>
    <Link className={classes.link} href="#">Sports</Link>
    <Link className={classes.link} href="#">Food</Link>
    <Link className={classes.link} href="#">Movies</Link>
    <Divider flexItem style={{marginBottom: 5}} />
    <Link className={classes.link} href="#">Science</Link>
    <Link className={classes.link} href="#">Music</Link>
    <Link className={classes.link} href="#">Life</Link>
    </Container>

  )
}

export default Rightbar;
