import React, { Component } from 'react'
import { Link, IndexLink, browserHistory } from 'react-router'

import NavLink from './NavLink'

class App extends Component {
    handleSubmit(e){
        e.preventDefault()

        const userName = e.target.elements[0].value
        const email = e.target.elements[1].value

        const path = `/about/${userName}`
        // console.log(this.context)
        //browserHistory.push( path )
        this.context.router.push( path )
    }
    goBackWithMe(){
        this.context.router.goBack()
    }
  render(){
    return (
    	<div>
    		<h1> hello react router~~~~ </h1>
    		<ul>
    			<li>
                    {/*} <NavLink url="/" linkName="Home" /> */}
                    <IndexLink to="/"  activeStyle={{ color: "red" }} >Home</IndexLink>
    			</li>
    			<li>
                    <NavLink url="/contact" linkName="Contact" />
    			</li>
    			<li>
                    <NavLink url="/about/:message" linkName="About" />
    			</li>
                <li>
                    <form action="" onSubmit={this.handleSubmit.bind(this)}>
                        <input type="text" placeholder="user name" />
                         <input type="text" placeholder="email"/>
                         <button type="submit">Submit</button>
                         <button onClick={ this.goBackWithMe.bind(this) } >Go Back</button>
                    </form>
                </li>
    		</ul>
    		{ this.props.children }

    	</div>
    )
  }
}

App.contextTypes = {
    router: React.PropTypes.object
}

export default App
