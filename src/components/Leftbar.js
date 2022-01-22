import React from 'react';
import { Container, makeStyles, Typography} from '@material-ui/core';
import { Bookmark, ExitToApp, Home, List, Person, PhotoCamera, PlayCircleFilledOutlined, Settings, Storefront, TabletMac } from '@material-ui/icons';
const useStyles= makeStyles((theme) => ({
 container: {
   paddingTop: theme.spacing(10),
   backgroundColor: theme.palette.primary.main,
   color: "white",
   height: "100vh",
   position: "sticky",
   top: 0,
   [theme.breakpoints.up("sm")]: {
     backgroundColor: "white",
     color: "#555",
   }
 },
 item: {
   display: "flex",
   marginBottom: theme.spacing(3),
   alignItems: "center",
   cursor: "pointer",
   [theme.breakpoints.down("sm")] :{
     marginBottom: theme.spacing(4),
   }
 },
 icon: {
   marginRight: theme.spacing(1),
   [theme.breakpoints.up("sm")]: {
     fontSize: "20px"
   }
 },
 text: {
   fontWeight: "500",
   [theme.breakpoints.down("sm")]:{
     display: "none"
   }
 }
}))

const Leftbar= () =>{
  const classes= useStyles()
  return(
   
      <Container className={classes.container}>
        <div className={classes.item}>
          <Home className={classes.icon}/>
          <Typography className={classes.text} >Homepage</Typography>
        </div>
        <div className={classes.item}>
          <Person className={classes.icon}/>
          <Typography className={classes.text} >Friends</Typography>
        </div>
        <div className={classes.item}>
          <List className={classes.icon}/>
          <Typography className={classes.text} >Lists</Typography>
        </div>
        <div className={classes.item}>
          <PhotoCamera className={classes.icon}/>
          <Typography className={classes.text} >Camera</Typography>
        </div>
        <div className={classes.item}>
          <PlayCircleFilledOutlined className={classes.icon}/>
          <Typography className={classes.text} >Videos</Typography>
        </div>
        <div className={classes.item}>
          <TabletMac className={classes.icon}/>
          <Typography className={classes.text} >Apps</Typography>
        </div>
        <div className={classes.item}>
          <Bookmark className={classes.icon}/>
          <Typography className={classes.text} >Collections</Typography>
        </div>
        <div className={classes.item}>
          <Storefront className={classes.icon}/>
          <Typography className={classes.text} >Market Place</Typography>
        </div>
        <div className={classes.item}>
          <Settings className={classes.icon}/>
          <Typography className={classes.text} >Settings</Typography>
        </div>
        <div className={classes.item}>
          <ExitToApp className={classes.icon}/>
          <Typography className={classes.text} >Logout</Typography>
        </div>
      </Container>
 
  

  )
}

export default Leftbar;
