import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appStore from './reducers'
import UsernameForm from './components/username/UsernameForm'
import GitHubCard from './components/github/GitHubCard'
import RedditCard from './components/reddit/RedditCard'

let store = createStore(appStore, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <h1>Welcome to Trunky</h1>
            <p>Enter a username and find their information on different services</p>
          </div>
          <UsernameForm />
          <div className="cards">
            <GitHubCard />
            <RedditCard />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
