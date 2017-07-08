import Login from './login';
import Register from './register'
import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';

class App extends Component{
	render(){
		return(<div><Login/><Register/></div>)
	}
}


render(<App/>,document.getElementById('app'));