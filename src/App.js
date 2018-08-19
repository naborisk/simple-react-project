import React, { Component } from 'react'
import './App.css'

// redux import
import { Provider } from 'react-redux'
import store from './store'

// components import
import PostForm from './components/PostForm'
import Posts from './components/Posts'
import Navi from './components/Navi'

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
            <PostForm />
            <hr/>
            <Posts />
            <hr/>
            <p>Apollo GraphQL</p>
            <hr/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App