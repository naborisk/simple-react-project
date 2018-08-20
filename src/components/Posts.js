import React, { Component } from 'react'
import { connect } from 'react-redux'

import { deletePost, editPost, updatePost } from '../actions/postActions'
import PostItem from './PostItem';

class Posts extends Component {
  constructor(){
    super()
    this.state = {
      posts: [],
      newPost: {}
    }
  }

  onDelete(id){
    console.log('DELETE_POST id: ' + id)
    // let posts = this.props.posts
    // let i = posts.findIndex(x => x.id === id)
    // posts.splice(i, 1)
    // this.setState({posts: posts})
    this.props.deletePost(id)
  }

  onEdit(id){
    this.props.editPost(id)
    console.log('EDIT_POST id:' + id)
  }

  onSave(post){
    this.props.updatePost(post)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newPost){
      this.props.posts.push(nextProps.newPost)
    }
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
            <PostItem
              key={post.id} post={post}
              onDelete={this.onDelete.bind(this)}
              onEdit={this.onEdit.bind(this)}
              onSave={this.onSave.bind(this)}
            />
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

export default connect(mapStateToProps, { deletePost, editPost, updatePost })(Posts)