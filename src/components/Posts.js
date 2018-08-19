import React, { Component } from 'react'
import { connect } from 'react-redux'

import { deletePost } from '../actions/postActions'
import PostItem from './PostItem';

class Posts extends Component {

  onDelete(id){
    console.log('DELETE_POST id: ' + id)
    // let posts = this.props.posts
    // let i = posts.findIndex(x => x.id === id)
    // posts.splice(i, 1)
    // this.setState({posts: posts})
    this.props.deletePost(id)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newPost){
      this.props.posts.unshift(nextProps.newPost)
    }
    console.log(this.props)
  }

  render() {

    // const postItems = this.props.posts.map(post => (
    //     <PostItem key={post.id} post={post} />
    // ))

    return (
      <div>
        <h2>Latest Posts</h2>
        {this.props.posts.map((post) => (
          <div>
            <PostItem key={post.id} post={post} />
            <br/>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.items,
    newPost: state.posts.item
  }
}

export default connect(mapStateToProps, { deletePost })(Posts)