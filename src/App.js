
import React, { Component } from 'react';
import Loader from './component/Loader'
import Jitsi from 'react-jitsi'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: 'Sandesh',
      roomName: 'Test',
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
  render() {
    return (
      <div>



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
                  justifyContent: 'center'
                }}
              />)
            : (
              <>
                <h2>Create your Meeting</h2>
                <input type='text' placeholder='Room name' value={this.state.roomName} onChange={(e) => this.handlenameChange(e)} />
                <input type='text' placeholder='Your name' value={this.state.displayName} onChange={(e) => this.handleroomChange(e)} />
                <input type='text' placeholder='Password' value={this.state.password} onChange={(e) => this.handlepasswordChange(e)} />
                <button onClick={(e) => this.handleCall(e)} type='submit'> Let&apos;s start! </button>
              </>
            )}
        </div>

        <div className='footer'>

        </div>

      </div>
    );
  }
}

export default App;




