import React, { Component } from 'react'
import $ from 'jquery'
import uuid from 'uuid'
import { connect } from 'react-redux'
import {  Button,
          Form,
          FormGroup,
          Input } from 'reactstrap'


class PostForm extends Component {
  constructor(){
      super()

      this.state = {
          title: '',
          body: '',
          id: '',
          editPost: false
      }

      this.handleSubmit = this.handleSubmit.bind(this)
      //this.onChange = this.onChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()

    // //Redux Way
    const newPost = {
        title: $('#title').val(),
        body: $('#body').val(),
        id: uuid.v4(),
        editPost: false
    }

    // if(post.title !== ''){
    //     this.props.createPost(post)
    // }

    this.props.onSubmit(e, newPost)
  }
  
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
           <FormGroup>
             <h2>Add Post</h2>
             <Input type='text' name='title' id='title' placeholder='Title' />
             <br/>
             <Input type='textarea' name='body' id='body' placeholder='Body' />
             <br/>
             <Button type='submit' color='success'>Submit</Button>
           </FormGroup>
        </Form>
      </div>
    )
  }
}

export default PostForm