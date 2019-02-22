import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import './posts.scss';

class PostForm extends Component {

    handleChange = (e) => {
        this.props.onUpdateFields(e);
    }

    render() {
        const { userId, title, body, onUpdateFields } = this.props;
        return (
            <div>
                <form noValidate autoComplete="off">
                    <TextField
                        id="user-id"
                        label="User Id"
                        name="userId"
                        value={userId}
                        onChange={this.handleChange}
                        margin="normal"
                        className="input-box"
                    />
                    <TextField
                        id="name"
                        label="TITLE "
                        name="title"
                        value={title}
                        onChange={this.handleChange}
                        margin="normal"
                        className="input-box"
                    />

                    <TextField
                        id="body"
                        label="Body "
                        name="body"
                        value={body}
                        onChange={this.handleChange}
                        margin="normal"
                        className="input-box"
                    />
                </form>
            </div>
        )
    }
}

export default PostForm;