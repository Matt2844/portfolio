import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
/* imports for the snackbar */
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  searchButton: {
    color: 'black',
    fontSize: '12px',
    height: '29px',
  }
}));

export default function SimpleBackdrop (props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [msgOpen, setMsgOpen] = React.useState(false);

  // for the snack bar
  const handleClick = () => {
    setMsgOpen(true);
  };

  const handleMsgClose = () => {

    setMsgOpen(false);
  };

  // for the search button 
  const handleClose = () => {
    setOpen(false);
  };

  // When the search button is clicked. Looks for search value and handles input. 
  const handleToggle = () => {
    let searchValue = props.searchClicked;
    searchValue = searchValue.trim();

    setOpen(!open);
    setTimeout(() => {
      handleClose();
    }, 1100)


    if (searchValue === 'about') {
      console.log('success: about')
    } else {
      handleClick();
    }
  };

  return (
    <div>
      <div>
        <Button className={classes.searchButton} variant="outlined" color="primary" onClick={handleToggle}   >
          Search
      </Button>
        <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={msgOpen}
          autoHideDuration={6000}
          onClose={handleMsgClose}
          message="Try searching for 'about' or 'contact' "
          action={
            <React.Fragment>
              <Button color="secondary" size="small" onClick={handleMsgClose}>
                CLOSE
          </Button>

            </React.Fragment>
          }
        />
      </div>
    </div>
  );
}