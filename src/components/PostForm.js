import React, { Component } from 'react'
import $ from 'jquery'
import uuid from 'uuid'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'
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

      this.onSubmit = this.onSubmit.bind(this)
      //this.onChange = this.onChange.bind(this)
  }

  onSubmit(e){
    e.preventDefault()

    // Normal React Way

    //   this.setState({
    //         title: $('#title').val(),
    //         body: $('#body').val()
    //       }
    //   )
    //   console.log(this.state)

    //Redux Way

    const post = {
        title: $('#title').val(),
        body: $('#body').val(),
        id: uuid.v4(),
        editPost: false
    }

    if(post.title !== ''){
        this.props.createPost(post)
    }
  }
  
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
           <FormGroup>
             <h2>Add Post</h2>
             <Input type='text' name='title' id='title' placeholder='Title' />
             <br/>
             <Input type='textarea' name='body' id='body' placeholder='Body' />
             <br/>
             <Button type='submit' color="success">Submit</Button>
           </FormGroup>
        </Form>
      </div>
    )
  }
}

export default connect(null, { createPost })(PostForm)