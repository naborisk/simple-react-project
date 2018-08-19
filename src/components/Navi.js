import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap'

class Navi extends Component {
    constructor(props) {
        super(props)
    
        this.toggle = this.toggle.bind(this)
        this.state = {
          isOpen: false
        }
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        })
      }

  render() {
    return (
      <div>
        <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Simple React-Redux-Apollo App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/naborisk/simple-react-project">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      </div>
    )
  }
}

export default Navi