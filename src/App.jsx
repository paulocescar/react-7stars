import React, { Component } from "react";

import Routes from './routes';

class App extends Component {
    render() {
        return (
            <div className="App">
              <div className='content'>
                <Routes />
              </div>
            </div>
        )
    }
}

export default App