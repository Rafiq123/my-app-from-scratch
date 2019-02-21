import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { fetchPosts } from '../../actions/posts';
import { updateDialog } from '../../actions/dialog';


import Popup from '../popUp'

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    }
});

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dialogConfig: {
                title: 'Add Posts',
                dialogContent: "Enter your post details",
                buttons: [
                    {
                        action: this.handleClose,
                        type: 'primary',
                        title: 'Cancel'
                    },
                    {
                        action: this.handleSubmit,
                        type: 'primary',
                        title: 'Submit'
                    }
                ]
            }
        }
    }

    handleSubmit = () => {
        console.log('submit');
        this.props.updateDialog(false);
    }

    handleClose = () => {
        this.props.updateDialog(false);
    }

    openDialog = () => {
        this.props.updateDialog(true);
    }

    componentWillMount = () => {
        this.props.fetchPosts();
    }

    render() {
        const { classes, myPosts } = this.props;
        const { dialogConfig } = this.state;
        return (
            <div>
                <Popup dialogConfig={dialogConfig} >
                    <h1>Test</h1>
                </Popup>

                <Paper className={classes.root}>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={this.openDialog}>
                        Add Post
                    </Button>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell >UserId</TableCell>
                                <TableCell >Title</TableCell>
                                <TableCell >Body</TableCell>
                                <TableCell >Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {myPosts ?
                                (myPosts.map(row => {
                                    return (
                                        <TableRow key={row.id}>
                                            <TableCell component="th" scope="row">
                                                {row.id}
                                            </TableCell>
                                            <TableCell >{row.userId}</TableCell>
                                            <TableCell >{row.title}</TableCell>
                                            <TableCell >{row.body}</TableCell>
                                            <TableCell >Edit</TableCell>
                                        </TableRow>
                                    );
                                }))
                                : (
                                    <TableRow >
                                        <TableCell component="th" scope="row" colSpan="4">
                                            No Records Found!
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = ({ posts }) => {
    return {
        myPosts: posts.items
    }
}

export default connect(mapStateToProps, { fetchPosts, updateDialog })(withStyles(styles)(Posts));