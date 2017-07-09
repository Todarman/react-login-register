import Login from '../login';
import Register from '../register'
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { MuiThemeProvider } from 'material-ui/styles';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('App', theme => ({
  container:{
  	display:'flex',
  	justifyContent:"center",
  	alignItems:"center"
  }
}));


class App extends Component{
	constructor(){
		super();
		this.state={
			email:"",
			password:""
		}
		this.handleChildData = this.handleChildData.bind(this);
		this.onLoginClick =this.onLoginClick.bind(this);
	}
	handleChildData(email,password){
		this.setState({email});
		this.setState({password});
	}
	onLoginClick(e){
		console.log(e);
		//make the api call and authenticate the user
	}
	render(){
		const classes = this.props.classes;
		var data={heading:"Already have an Account? Login then!",
		emailhelpertext:"Email format expected: john.doe@xyz.com",
		passwordhelpertext:"Enter a strong password",emailplaceholder:"Enter emailid",passwordplaceholder:"Enter password"}
		return(
				<Grid container className={classes.container}>
					<Grid item lg={4} md={6} sm={6} xs={12}>
			          <Login data={data} updateParent={this.handleChildData} onLoginClick={this.onLoginClick}/>
			        </Grid>
			        <Grid item lg={4} md={6} sm={6} xs={12}>
			          <Register/>
			        </Grid>
				</Grid>
			)
	}
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(App);