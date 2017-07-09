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
			emailhelpertext:"",
			passwordhelpertext:"",
			emailCheck:false,
			passwordCheck:false,
			disabled : ""
		}
		this.handleEmailData = this.handleEmailData.bind(this);
		this.handlePasswordData = this.handlePasswordData.bind(this);
		this.renderLoginButton =this.renderLoginButton.bind(this);
	}
	componentWillMount(){
		let emailtext = this.props.data.emailhelpertext;
		let passtext = this.props.data.passwordhelpertext;
		this.setState({emailhelpertext:emailtext});
		this.setState({passwordhelpertext:passtext});
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
	renderLoginButton(classes){
		if((this.state.emailCheck && this.state.passwordCheck)!== true){
	        return [<Button key={Math.random(3)+2} raised color="primary" disabled onClick={this.props.onLoginClick} className={classes.button}>
	        	Login
	      	</Button>];
		}else{
	      	return [<Button key={Math.random(3)+2} raised color="primary" onClick={this.props.onLoginClick} className={classes.button}>
	        	Login
	      	</Button>];
		}
	}
	render(){
		const classes = this.props.classes;
		let isdisabled = this.state.disabled;
		return(
			<Paper className={classes.loginContainer} elevation={4}>
		        <Typography type="title" component="p">
		          {this.props.data.heading}
		        </Typography>
		        <TextField
		          id="email"
		          className={classes.input}
		          label={this.props.data.emailplaceholder}
		          value={this.state.email}
		          onChange={this.handleEmailData}
		          type="email"
		          helperText={this.state.emailhelpertext}
		          marginForm
		        />
		        <TextField
		          id="password"
		          className={classes.input}
		          label={this.props.data.passwordplaceholder}
		          type="password"
		          value={this.state.password}
		           onChange={this.handlePasswordData}
		          helperText={this.state.passwordhelpertext}
		          marginForm
		        />
		        {this.renderLoginButton(classes)}
	      	</Paper>

			)
	}
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Login);