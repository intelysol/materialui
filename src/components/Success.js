import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


export class Success extends Component {
    continue = e=> {
        e.preventDefault();
        // Process form 
        this.props.nextStep();
    }

    back = e=> {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Details"></AppBar>
                    <h1>Thank you for your submission</h1>
                    <p>Your will get an email with further instructions</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles={
    button:{
        margin: 15
    }
}

export default Success
