#Learning React Router

1,Install 
```
npm install -save react-router
```

component
```
Router, Route, hashHistory
```

2, activeClassName  / activeStyle

```
activeStyle={{ color: "red" }}

activeClassName="active"

```
3, install CSS

```
npm install style-loader css-loader --save-dev
```

4, params

```
path="about/:message"
 { this.props.params.message }
```

5,IndexRoute
```
<IndexRoute component={ Home } />
```

6,Redirect
```
<Redirect from="about" to="about/react"/>
```

7,browserHistory


8,Navigation control

-Link

-browserHistory
```
browserHistory.push( path )
```
-this.context.router
```
this.context.router.push( path )

App.contextTypes = {
    router: React.PropTypes.object
}

```


9, Confirm Navigation
-this.context.router.setRouteLeaveHook

```
componentDidMount(){
	this.context.router.setRouteLeaveHook(this.props.route, this.leaveHook)
}
leaveHook( nextLocation ){
	return 'Do you want leave?'
}

```
