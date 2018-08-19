import React, { Component } from 'react'
import { Button, Card, CardText, CardBody, CardSubtitle, CardHeader } from 'reactstrap'
import { deletePost } from '../actions/postActions'
import { connect } from 'react-redux';

class PostItem extends Component {

  handleDelete(id){
    console.log('handleDeletePost')
    this.props.deletePost(id)
  }

  render() {
    var d = new Date()

    var month = d.getMonth()+1
    var day = d.getDate()

    var output = d.getFullYear() + '/' +
        (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day + ' | ' +
        d.getHours() + ':' + (d.getMinutes()<10 ? '0' : '' ) + d.getMinutes()

    return (
      <Card>
        <CardHeader tag='h4'>{this.props.post.title}</CardHeader>
        <CardBody>
          <CardSubtitle>{output}</CardSubtitle>
          <CardText>{this.props.post.body}</CardText>
          {/* <Button color='danger' onClick={this.handleDelete.bind(this, this.props.post.id)} >X</Button> */}
        </CardBody>
      </Card>
    )
  }
}

export default connect(null, { deletePost })(PostItem)