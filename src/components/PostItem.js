import React, { Component } from 'react'
import { Button, Card, CardText, CardBody, CardSubtitle, CardHeader, Input } from 'reactstrap'
class PostItem extends Component {
  constructor(props){
    super(props)
    
    this.handleDelete = this.handleDelete.bind(this, this.props.post.id)
    this.handleEdit = this.handleEdit.bind(this, this.props.post.id)
    this.savePost = this.savePost.bind(this, this.props.post)
  }

  handleDelete(id){
    this.props.onDelete(id)
  }

  handleEdit(id){
    this.props.onEdit(id)
  }

  savePost(post){
    post.body = document.getElementById('editPost').value
    console.log(post)
    this.props.onSave(post)
  }

  handleChange(e){
    
  }

  render() {
    return (
      <Card>
        <CardHeader tag='h4'>{this.props.post.title}</CardHeader>

        {(!this.props.post.editPost) ?
        <CardBody>
          <CardSubtitle>{this.props.post.postedTime}</CardSubtitle>
          <CardText>{this.props.post.body}</CardText>
          <Button color='danger' onClick={this.handleDelete} >X</Button>{' '}
          <Button color='primary' onClick={this.handleEdit} >Edit</Button>
        </CardBody>
        : 
        <CardBody>
          <CardSubtitle>{this.props.post.postedTime}</CardSubtitle>
          <br />
          <Input type='textarea'id='editPost'  onChange={this.handleChange} defaultValue={this.props.post.body} />
          <br />
          <Button color='danger' onClick={this.handleEdit} >Cancel</Button>{' '}
          <Button color='success' onClick={this.savePost} >Save</Button>
        </CardBody>
      }
      </Card>
    )
  }
}

export default PostItem