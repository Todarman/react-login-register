import React,{Component} from 'react'
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import validator from 'validator';
import { LabelCheckbox } from 'material-ui/Checkbox';
import { FormGroup } from 'material-ui/Form';
var ValidatePassword = require('validate-password');
var passvalidator = new ValidatePassword();

const styleSheet = createStyleSheet('Register', theme => ({
  registerContainer:{
  	padding:20,
  	display:'flex',
  	flexDirection:'column',
  	justifyContent:"center",
  	alignItems:"center"
  },
  input:{
  	width:"100%"
  },
  checkbox:{
  	fontSize:12,
  }
}));

class Register extends Component{
	constructor(){
		super();
		this.state={
			firstname:"",
			lastname:"",
			username:"",
			email:"",
			password:"",
			cpassword:"",
			firstnamehelpertext:"",
			lastnamehelpertext:"",
			emailhelpertext:"",
			passwordhelpertext:"",
			cpasswordhelpertext:"",
			usernamehelpertext:"",
			agreed:"",
			fnameValid:false,
			lnameValid:false,
			unameValid:false,
			emailValid:false,
			passValid:false,
			cpassValid:false
		}
		this.handlefirstnameData = this.handlefirstnameData.bind(this);
		this.handlelastnameData = this.handlelastnameData.bind(this);
		this.handleEmailData = this.handleEmailData.bind(this);
		this.handleUsernameData = this.handleUsernameData.bind(this);
		this.handlePasswordData = this.handlePasswordData.bind(this);
		this.handleCPasswordData = this.handleCPasswordData.bind(this);
		this.renderRegisterButton =this.renderRegisterButton.bind(this);

	}
	componentWillMount(){
		let emailtext = this.props.data.helpertext.email;
		let passtext = this.props.data.helpertext.password;
		let cpasstext = this.props.data.helpertext.cpassword;
		let fnametext = this.props.data.helpertext.firstname;
		let lnametext = this.props.data.helpertext.lastname;
		let unametext = this.props.data.helpertext.username;

		this.setState({emailhelpertext:emailtext});
		this.setState({passwordhelpertext:passtext});
		this.setState({firstnamehelpertext:fnametext});
		this.setState({lastnamehelpertext:lnametext});
		this.setState({usernamehelpertext:unametext});
		this.setState({cpasswordhelpertext:cpasstext});
	}
	handlefirstnameData(event){
		let firstnameparams ={
			firstname:event.target.value,
			lastname:this.state.lastname,
			email:this.state.email,
			password: this.state.password,
			cpassword:this.state.cpassword,
			username:this.state.username
		}
		this.setState({firstname: event.target.value },this.props.updateParent(firstnameparams));
		if(validator.isAlpha((firstnameparams.firstname))){
			this.setState({firstnamehelpertext:"First name looks good"});
			this.setState({fnameValid:true});
		}
		else{
			this.setState({fnameValid:false});
			this.setState({firstnamehelpertext:"Please enter a proper firstname"});
		}
	}
	handlelastnameData(event){
		let lastnameparams ={
			firstname:this.state.firstname,
			lastname:event.target.value,
			email:this.state.email,
			password: this.state.password,
			cpassword:this.state.cpassword,
			username:this.state.username
		}
		this.setState({lastname: event.target.value },this.props.updateParent(lastnameparams));
		if(validator.isAlpha((lastnameparams.lastname))){
			this.setState({lastnamehelpertext:"Last name looks good"});
			this.setState({lnameValid:true});
		}
		else{
			this.setState({lnameValid:false});
			this.setState({lastnamehelpertext:"Please enter a proper lastname"});
		}
	}
	handleEmailData(event){
	 let emailparams ={
			firstname:this.state.firstname,
			lastname:this.state.lastname,
			email:event.target.value,
			password: this.state.password,
			cpasswod:this.state.cpassword,
			username:this.state.username
		}
	this.setState({ email: event.target.value },this.props.updateParent(emailparams));
	 let EmailCheck = validator.isEmail(event.target.value);
	 if (EmailCheck) {
	 	this.setState({emailhelpertext:"Email looks good"});
	 	this.setState({emailValid:true});
	 }
	 else{
	 	this.setState({emailValid:false});
	 	this.setState({emailhelpertext:"Email format expected: john.doe@xyz.com"});
	 }
	}
	handleUsernameData(event){
		let unparams ={
			firstname:this.state.firstname,
			lastname:this.state.lastname,
			email:this.state.email,
			password: this.state.password,
			cpasswod:this.state.cpassword,
			username:event.target.value
		}
	 this.setState({username: event.target.value },this.props.updateParent(unparams));
	 if(validator.isAlphanumeric((unparams.username))){
			this.setState({usernamehelpertext:"username looks good"});
			this.setState({unameValid:true});
		}
		else{
			this.setState({unameValid:false});
			this.setState({usernamehelpertext:"Please enter a proper username"});
		}
	}
	handlePasswordData(event){
		let passparams ={
			firstname:this.state.firstname,
			lastname:this.state.lastname,
			email:this.state.email,
			password: this.state.password,
			cpasswod:this.state.cpassword,
			username:event.target.value
		}
	 this.setState({ password: event.target.value },this.props.updateParent(passparams));
	 let val = event.target.value;
	 var passwordData = passvalidator.checkPassword(val);
	 if (passwordData.isValid) {
	 	this.setState({passValid:passwordData.isValid})
	 	this.setState({passwordhelpertext:"Password looks good"});
	 }
	 else{
	 	this.setState({passValid:passwordData.isValid})
	 	this.setState({passwordhelpertext:passwordData.validationMessage});
	 }
	}
	handleCPasswordData(event){
		let passparams ={
			firstname:this.state.firstname,
			lastname:this.state.lastname,
			email:this.state.email,
			password: this.state.password,
			cpasswod:this.state.cpassword,
			username:event.target.value,
		}
	 this.setState({ cpassword: event.target.value },this.props.updateParent(passparams));
	 let val = event.target.value;
	 var passwordData = passvalidator.checkPassword(val);
	 if (passwordData.isValid && (this.state.password === val)) {
	 	this.setState({cpassValid:passwordData.isValid})
	 	this.setState({cpasswordhelpertext:"Password Confirmed"});
	 }
	 else{
	 	this.setState({cpassValid:passwordData.isValid})
	 	this.setState({cpasswordhelpertext:passwordData.validationMessage});
	 }
	}

	renderRegisterButton(classes){
		if(this.state.emailValid && this.state.fnameValid && this.state.lnameValid && this.state.unameValid && this.state.passValid && this.state.cpassValid && this.state.agreed){
	        return [<Button key={Math.random(3)+2} raised color="primary" onClick={this.props.onRegisterClick} className={classes.button}>
	        	Register
	      	</Button>];
		}else{
	      	return [<Button key={Math.random(3)+2} raised color="primary" disabled className={classes.button}>
	        	Register
	      	</Button>];
		}
	}
	render(){
		const classes = this.props.classes
		return(
			<Paper className={classes.registerContainer} elevation={4}>
		        <Typography type="title" component="p">
		          {this.props.data.heading}
		        </Typography>
		        <TextField
		          id="firstname"
		          className={classes.input}
		          label={this.props.data.placeholder.firstname}
		          value={this.state.firstname}
		          onChange={this.handlefirstnameData}
		          type="text"
		          helperText={this.state.firstnamehelpertext}
		          marginForm
		        />
		        <TextField
		          id="lastname"
		          className={classes.input}
		          label={this.props.data.placeholder.lastname}
		          value={this.state.lastname}
		          onChange={this.handlelastnameData}
		          type="text"
		          helperText={this.state.lastnamehelpertext}
		          marginForm
		        />
		        <TextField
		          id="username"
		          className={classes.input}
		          label={this.props.data.placeholder.username}
		          value={this.state.username}
		          onChange={this.handleUsernameData}
		          type="text"
		          helperText={this.state.usernamehelpertext}
		          marginForm
		        />
		        <TextField
		          id="remail"
		          className={classes.input}
		          label={this.props.data.placeholder.email}
		          value={this.state.email}
		          onChange={this.handleEmailData}
		          type="email"
		          helperText={this.state.emailhelpertext}
		          marginForm
		        />
		        <TextField
		          id="rpassword"
		          className={classes.input}
		          label={this.props.data.placeholder.password}
		          type="password"
		          value={this.state.password}
		           onChange={this.handlePasswordData}
		          helperText={this.state.passwordhelpertext}
		          marginForm
		        />
		        <TextField
		          id="rcpassword"
		          className={classes.input}
		          label={this.props.data.placeholder.cpassword}
		          type="password"
		          value={this.state.cpassword}
		           onChange={this.handleCPasswordData}
		          helperText={this.state.cpasswordhelpertext}
		          marginForm
		        />
		        <FormGroup row>
		        	<Typography type="caption" component="p">
			          <LabelCheckbox
				          checked={this.state.checkedA}
				          className={classes.checkbox}
				          onChange={(event, checked) => this.setState({ agreed: checked })}
				          label="By registering I agree to the terms and conditions"
				          value="agreed"
				        />
			        </Typography>
			    </FormGroup>
			    {this.renderRegisterButton(classes)}
		    </Paper>
			)
	}
}


Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Register);