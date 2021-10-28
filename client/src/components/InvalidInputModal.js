import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import AuthContext from '../auth';
import {useContext} from 'react';

export default function InvalidInputModal(props) {

    const { auth } = useContext(AuthContext);

    const handleClose = () => {
        auth.clearErrorMessage();
    };

    return (
        <div>
        <Dialog
            open={props.open}
            onClose={handleClose}
        >
            <Alert severity="error">
                {props.title + " - " + props.message}
                <IconButton onClick={handleClose}>
                    <CloseIcon/>
                </IconButton>
            </Alert>

        </Dialog>
        </div>
    );
}