import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';

import './popup.scss';

class myPopUp extends Component {

    render() {
        const { dialogConfig, dialogStatus } = this.props;
        return (
            <div>
                <Dialog
                    open={dialogStatus}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">{dialogConfig && dialogConfig.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {dialogConfig && dialogConfig.dialogContent}
                        </DialogContentText>
                        {this.props.children}
                    </DialogContent>
                    <DialogActions>
                        {dialogConfig && dialogConfig.buttons &&
                            (
                                dialogConfig.buttons.map(row => {
                                    return (
                                        <Button onClick={row.action} color={row.type} variant = {row.variant}>
                                            {row.title}
                                        </Button>
                                    );
                                })
                            )

                        }
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
const mapStateToProps = ({ dialog }) => {
    return {
        dialogStatus: dialog.dialogStatus
    }
}
export default connect(mapStateToProps, null)(myPopUp);