import React, { Component } from 'react'
import './App.css'

// redux import
import { Provider } from 'react-redux'
import store from './store'

// components import
import PostForm from './components/PostForm'
import PostView from './components/PostView'
import Navi from './components/Navi'
import ApolloTest from './components/ApolloTest';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <Navi />
          <div className="container">
            <br/>
            <p>Redux</p>
            <hr/>
            <br/>
            {/* Moved PostForm to PostView */}
            <PostView />
            <hr/>
            <br/>
            <p>Apollo GraphQL</p>
            <hr/>
            <ApolloTest />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App

// TODO: Fix the date feature (date should be kept with the post item or else it would be dynamic)