import React, { useState } from 'react';
import { makeStyles, AppBar, Toolbar, Typography, InputBase, alpha, Badge, Avatar} from '@material-ui/core';
import { Search, Mail, Notifications, Cancel } from '@material-ui/icons';


const useStyles= makeStyles((theme) => ({
  logoLg : {
    display: "none",
    [theme.breakpoints.up("sm")] : {
      display: "block",
    }, 
  },
  logoSm :{
    display: "block",
    [theme.breakpoints.up("sm")] : {
      display: "none",
    },
  } ,
  toolbar :{
    display: "flex",
    justifyContent: "space-between"
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width:"50%",
    [theme.breakpoints.down("sm")] : {
      display: (props) => props.open ? "flex" : "none",
      width: "70%"
    },

  }, 
  input :{
    color: "white",
    marginLeft: theme.spacing(1),
    
  }, 
  icons :{
    display: "flex",
    alignItems: "center",
    display: (props) => props.open ? "none" : "flex",
  },
  badge :{
    marginRight: theme.spacing(2),
  },
  searchButton : {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")] :{
      display: "none"
    }
  },
  cancel :{
    [theme.breakpoints.up("sm")] :{
      display: "none"
    }
  }
}))

const Navbar= () =>{
  const [open, setOpen] = useState(false)
  const classes= useStyles({open})
  console.log(open)
  
  return(
    <div  >
     <AppBar>
       <Toolbar className={classes.toolbar}>
         <Typography variant='h6' className={classes.logoLg}>Qasim Habib</Typography>
         <Typography variant='h6' className={classes.logoSm}>Q-H</Typography>
         <div className={classes.search}>
           <Search />
           <InputBase placeholder='search' className={classes.input} />
           <Cancel className={classes.cancel} onClick= {() => {setOpen(false)}} />
         </div>
         <div className={classes.icons}>
           <Search className={classes.searchButton}  onClick= {() => {setOpen(!open)}} />
         <Badge badgeContent={40} color="secondary"  className={classes.badge}>
            <Mail />
         </Badge>
         <Badge badgeContent={7} color="secondary" className={classes.badge}>
            <Notifications />
         </Badge>
         <Avatar alt='Qasim Habib' src="https://i.picsum.photos/id/923/200/300.jpg?hmac=eiYSYaG7v46VlrE38Amrg33bd2FzVjaCsQrLMdekyAU"/>
         </div>
        
       </Toolbar>
     </AppBar>
    </div>

  )
}

export default Navbar;
