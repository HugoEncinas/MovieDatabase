import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Typography, Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Header extends Component {

    state = {
        auth: true,
        userEmail: ''
    };

    componentDidMount() {
        let userEmail = window.sessionStorage.getItem('userEmail');
        if (userEmail) {
            this.setState({
                userEmail
            })
        }
    }

    render() {
        const { auth, userEmail } = this.state;
        return (
            <AppBar position="static">
                <Toolbar>
                <Link to={'/'}>
                    <IconButton color="inherit">
                        <Icon>home</Icon>
                    </IconButton>
                </Link>
                <Typography variant="title" color="inherit" >
                    {this.props.title}
                </Typography>
                {auth && (
                    <div className='userInfo'>
                        <Typography variant="caption" color="inherit" >
                            {`user: ${userEmail}`}
                        </Typography>
                    </div>
                )}
                <Link to={'/favorites'}>
                    <IconButton color="inherit">
                        <Icon>stars</Icon>
                    </IconButton>
                </Link>
                </Toolbar>
            </AppBar>
        )
    }
};

Header.defaultProps = {
    title: 'Title'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;