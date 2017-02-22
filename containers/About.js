import React, { Component } from 'react'

export default class Contact extends Component {
  render(){

  	// console.log( this.props )
    return <h1> About us. Hi { this.props.params.message } </h1>
  }
}