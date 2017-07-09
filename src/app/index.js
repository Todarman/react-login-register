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
			password:"",
			username:"",
			firstname:"",
			lastname:"",
			remail:"",
			rpass:"",
			rusername:"",
			rcpass:"",
			ragree:false,

		}
		this.handleLoginChildData = this.handleLoginChildData.bind(this);
		this.handleRegisterChildData = this.handleRegisterChildData.bind(this);
		this.onLoginClick =this.onLoginClick.bind(this);
		this.onRegisterClick =this.onRegisterClick.bind(this);	
	}
	handleLoginChildData(logindata){
		this.setState({email:logindata.email});
		this.setState({password:logindata.password});
	}
	handleRegisterChildData(registerdata){
		this.setState({remail:registerdata.email});
		this.setState({rpass:registerdata.password});
		this.setState({firstname:registerdata.firstname});
		this.setState({lastname:registerdata.lastname});
		this.setState({rcpass:registerdata.cpassword});
		this.setState({rusername:registerdata.lastname});
		this.setState({ragree:registerdata.ragree});
	}
	onLoginClick(e){
		console.log(e);
		//make the api call and authenticate the user
	}
	onRegisterClick(e){
		console.log(e);
		//make the api call and authenticate the user
	}
	render(){
		const classes = this.props.classes;
		var logindata={heading:"Already have an Account? Login then!",
		helpertext:{email:"Email format expected: john.doe@xyz.com",
		password:"Enter a strong password"},placeholder:{email:"Enter emailid",password:"Enter password"}}; 
		var registerData ={heading:"New to our site? Register now!"}

		var registerdata={heading:"New to our site? Register now!",
		helpertext:{firstname:"Lower and uppercase characters allowed",lastname:"Lower and uppercase characters allowed",username:"only Alphanumeric allowed",cpassword:"Confirm the above password",email:"Email format expected: john.doe@xyz.com",
		password:"Enter a strong password"},placeholder:{firstname:"Enter your Firstname",lastname:"Enter your Lastname",username:"Enter your username",cpassword:"Confirm your password",email:"Enter emailid",password:"Enter password"}}; 

		return(
			<Grid container className={classes.container}>
				<Grid item lg={4} md={6} sm={6} xs={12}>
		          <Login data={logindata} updateParent={this.handleLoginChildData} onLoginClick={this.onLoginClick}/>
		        </Grid>
		        <Grid item lg={4} md={6} sm={6} xs={12}>
		          <Register data ={registerdata} updateParent={this.handleRegisterChildData} onRegisterClick={this.onRegisterClick}/>
		        </Grid>
			</Grid>
			)
	}
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(App);