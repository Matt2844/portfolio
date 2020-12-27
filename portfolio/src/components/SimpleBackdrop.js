import React, { useRef } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'
/* imports for the snackbar */
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function getModalStyle () {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
  const [modalStyle] = React.useState(getModalStyle);
  const [openModal, setOpenModal] = React.useState(false);

  // delay function used with promises, handles async functions.
  const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // for the modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CloseIcon className="skills-modal-close" onClick={handleCloseModal} />
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );


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
    Promise.prototype.delay = (time) =>
      new Promise(resolve => setTimeout(resolve, time));
    let searchValue = props.searchClicked;
    searchValue = searchValue.trim();
    searchValue = searchValue.toLowerCase();

    setOpen(!open);
    setTimeout(() => {
      handleClose();
    }, 1100)

    if (searchValue === 'skills') {
      console.log('success: about')
      setOpen(!open);
      handleMsgClose();
      delay(1300)
        .then(() => handleClose())
        .then(() => handleOpenModal());
    } else {
      handleClick();
    }
  };

  return (
    <div>
      <div >
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
          message="Try searching for 'skills' "
          action={
            <React.Fragment>
              <Button color="secondary" size="small" onClick={handleMsgClose}>
                CLOSE
          </Button>

            </React.Fragment>

          }
        />
        <div>
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>

      </div>
    </div>
  );
}