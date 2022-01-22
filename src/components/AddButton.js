import React, { useState } from 'react';
import { Button, Container, Fab, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import MuiAlert from '@material-ui/lab/Alert'



const useStyles= makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
    },
    container: {
        height: "550px",
        width: "500px",
        background: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            height: "100vh",
            width: "100vh"

        }
    },
    form: {
        padding: theme.spacing(2)
    },
    item: {
       marginTop: theme.spacing(3) 
    }
}))

function Alert(props){
    return <MuiAlert elevation={6} variant='filled' {...props} />
}


const AddButton= () =>{
    const [open, setOpen]= useState(false)
    const [openAlert, setOpenAlert]= useState(false)
  const classes= useStyles()

  const handleClose = () => {
    
    setOpenAlert(false);
  };

  return(
   <>   
    <Tooltip title="Add" onClick={()=> setOpen(true)}>
        <Fab color="primary" aria-label="add" className={classes.fab}>
            <Add/>
        </Fab>
    </Tooltip>
    <Modal open={open}>
        <Container className={classes.container}>
            <form className={classes.form}>
                <div className={classes.item}>
                <TextField id="standard-basic" label="Title" defaultValue="Hello World" style={{width: "100%"}} />
                </div>
                <div className={classes.item} style={{width: "100%"}}>
                <TextField
                     id="outlined-multiline-static"
                     label="Description"
                      multiline
                      rows={4}
                     defaultValue="Tell Your Story......."
                     variant= "outlined"
                />
                </div>
                <div className={classes.item}> 
                    <TextField select label="Visibility" value="Public">
                        <MenuItem value="Public">Public</MenuItem>
                        <MenuItem value="Private">Private</MenuItem>
                        <MenuItem value="UNLISTED">Unlisted</MenuItem>
                    </TextField>
                </div>
                <div className={classes.item}>
                    <FormLabel>Who can comments ?</FormLabel>
                    <RadioGroup >
                        <FormControlLabel value="Everybody" control={<Radio />} label="Everybody" />
                        <FormControlLabel value="Nobody" control={<Radio />} label="Nobody" />
                        <FormControlLabel value="My Friends" control={<Radio />} label="My Friends" />
                    </RadioGroup>  
                </div>
                <div className={classes.item}>
                    <Button variant='outlined' color="primary" style={{marginRight: 20}} onClick={()=> setOpenAlert(true)}>Create</Button>
                    <Button variant='outlined' color="secondary" onClick={()=> setOpen(false)}>Cancel</Button>
                </div>
            </form>
        </Container>
    </Modal>
    <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{vertical: "bottom", horizontal: "left"}}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Post has been Created!
        </Alert>
      </Snackbar>
    </>
  )
}

export default AddButton;
