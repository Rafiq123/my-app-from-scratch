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
import Snackbar from '@material-ui/core/Snackbar';

import { fetchPosts, addPost, showToast } from '../../actions/posts';
import { updateDialog } from '../../actions/dialog';


import Popup from '../popUp';
import PostForm from './postForm';

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
            postData: {
                title: '',
                userId: '',
                body: ''
            }

        }
    }

    handleSubmit = () => {
        this.props.addPost(this.state.postData);
        this.props.updateDialog(false);
        // var toastData = {
        //     ...this.props.toastData,
        //     open: true,
        //     message: "Post saved successfully!"
        // }
        // this.props.showToast(toastData);
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

    handleChange = (e) => {
        var prevState = { ...this.state.postData }
        prevState[e.target.name] = e.target.value;
        this.setState({ postData: prevState });
    }

    render() {
        const { classes, myPosts, toast } = this.props;
        const { postData, toastData } = this.state;
        const { vertical, horizontal, message, open } = toast;
        const dialogConfig = {
            title: 'Add Posts',
            buttons: [
                {
                    action: this.handleClose,
                    type: 'primary',
                    title: 'Cancel',
                    variant: "default"
                },
                {
                    action: this.handleSubmit,
                    type: 'primary',
                    title: 'Submit',
                    variant: "contained"
                }
            ]
        };
        return (
            <div className="posts">
                {/* <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    autoHideDuration={3000}
                    message={<span id="message-id">{message}</span>}
                /> */}
                <Popup dialogConfig={dialogConfig} >
                    {/* lifting state up from post form  */}
                    <PostForm
                        title={postData.title}
                        userId={postData.userId}
                        body={postData.body}
                        onUpdateFields={this.handleChange} />
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

const mapStateToProps = ({ posts, toast }) => {
    return {
        myPosts: posts.posts,
        toast: toast
    }
}

export default connect(mapStateToProps, { fetchPosts, updateDialog, addPost, showToast })(withStyles(styles)(Posts));