
import React, { Component } from 'react';
import Loader from './component/Loader'
import Jitsi from 'react-jitsi'
import './App.css'
import Card from '@material-ui/core/Card';

import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';




class App extends Component {



  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      roomName: '',
      password: '',
      onCall: false,
    }
  }


  handleroomChange = (e) => {
    this.setState({ displayName: e.target.value })
  }
  handlenameChange = (e) => {
    this.setState({ roomName: e.target.value })
  }
  handlepasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }
  handleCall = (e) => {
    this.setState({ onCall: true })
  }
    ;
  render() {

    return (
      <div className="main-container">
        <div className='main'>
          {this.state.onCall
            ? (
              <Jitsi
                roomName={this.state.roomName}
                displayName={this.state.displayName}
                password={this.state.password}
                loadingComponent={Loader}
                containerStyle={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '15rem'
                }}
              />)
            : (
              <React.Fragment>

                <Card style={{ padding: '3rem', marginTop: '5rem', width: '200px', justifyContent: 'center', textAlign: 'center', marginLeft: '30rem' }} >
                  <h1>Create Your Meeting</h1>
                  <form noValidate autoComplete="off">
                    <TextField type='text' value={this.state.roomName} onChange={(e) => this.handlenameChange(e)} label="Enter Room Name" />
                  </form>
                  <form noValidate autoComplete="off">
                    <TextField type='text' value={this.state.displayName} onChange={(e) => this.handleroomChange(e)} label="Enter Display Name" />
                  </form>
                  <form noValidate autoComplete="off">
                    <TextField type='text' value={this.state.password} onChange={(e) => this.handlepasswordChange(e)} label="Enter Password" />
                  </form>

                  <Button style={{ marginTop: '2rem' }} variant="contained" color="primary" onClick={(e) => this.handleCall(e)} type='submit'> Let&apos;s start! </Button>
                </Card>

              </React.Fragment>
            )}
        </div>

        <div className='footer'>
          <h3>Created By Sandesh Deshmukh </h3>
          <small>Project link- <a href="https://github.com/sandeshdeshmukh1/Video-conferencing-app">https://github.com/sandeshdeshmukh1/Video-conferencing-app</a></small>


        </div>

      </div>
    );
  }
}

export default App;




