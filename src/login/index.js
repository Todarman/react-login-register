import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import validator from 'validator';
var ValidatePassword = require('validate-password');
var passvalidator = new ValidatePassword();

const styleSheet = createStyleSheet('Login', theme => ({
  loginContainer:{
  	padding:20,
  	display:'flex',
  	flexDirection:'column',
  	justifyContent:"center",
  	alignItems:"center"
  },
  input:{
  	width:"100%"
  },
  button:{
  	marginTop:30,
  }
}));

class Login extends Component{
	constructor(){
		super();
		this.state={
			email:"",
			password:"",
			emailhelpertext:"Email format expected: john.doe@xyz.com",
			passwordhelpertext:"Enter a strong password",
			emailCheck:false,
			passwordCheck:false
		}
		this.handleEmailData = this.handleEmailData.bind(this);
		this.handlePasswordData = this.handlePasswordData.bind(this);
	}
	handleEmailData(event){
	 this.setState({ email: event.target.value },this.props.updateParent(event.target.value,this.state.password));
	 let EmailCheck = validator.isEmail(event.target.value);
	 if (EmailCheck) {
	 	this.setState({emailCheck:true});
	 	this.setState({emailhelpertext:"Email looks good"});
	 }
	 else{
	 	this.setState({emailCheck:false});
	 	this.setState({emailhelpertext:"Email format expected: john.doe@xyz.com"});
	 }
	}
	handlePasswordData(event){
	 this.setState({ password: event.target.value },this.props.updateParent(this.state.email,event.target.value));
	 let val = event.target.value;
	 var passwordData = passvalidator.checkPassword(val);
	 if (passwordData.isValid) {
	 	this.setState({passwordCheck:passwordData.isValid})
	 	this.setState({passwordhelpertext:"Password looks good"});
	 }
	 else{
	 	this.setState({passwordCheck:passwordData.isValid})
	 	this.setState({passwordhelpertext:passwordData.validationMessage});
	 }
	}
	render(){
		const classes = this.props.classes;
		return(
			<Paper className={classes.loginContainer} elevation={4}>
		        <Typography type="title" component="p">
		          Already have an Account? Login then!
		        </Typography>
		        <TextField
		          id="email"
		          className={classes.input}
		          label="email id"
		          value={this.state.email}
		          onChange={this.handleEmailData}
		          type="email"
		          helperText={this.state.emailhelpertext}
		          marginForm
		        />
		        <TextField
		          id="password"
		          className={classes.input}
		          label="Password"
		          type="password"
		          value={this.state.password}
		           onChange={this.handlePasswordData}
		          helperText={this.state.passwordhelpertext}
		          marginForm
		        />
		        <Button raised color="primary" className={classes.button}>
		        	Login
		      	</Button>
	      	</Paper>

			)
	}
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Login);