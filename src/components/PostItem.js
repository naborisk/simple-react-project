import React, { Component } from 'react'
import { Button, Card, CardText, CardBody, CardSubtitle, CardHeader } from 'reactstrap'
class PostItem extends Component {

  handleDelete(id){
    this.props.onDelete(id)
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
          <Button color='danger' onClick={this.handleDelete.bind(this, this.props.post.id)} >X</Button>
        </CardBody>
      </Card>
    )
  }
}

export default PostItem