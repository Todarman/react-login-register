import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styleSheet = createStyleSheet('Login', theme => ({
  loginContainer:{
  	paddingTop:20,
  	paddingBottom:20,
  	display:'flex',
  	flexDirection:'column',
  	justifyContent:"center",
  	alignItems:"center"
  },
  button:{
  	marginTop:30,
  }
}));

class Login extends Component{
	render(){
		const classes = this.props.classes;
		return(
			<Paper className={classes.loginContainer} elevation={4}>
		        <Typography type="headline" component="p">
		          Already have an Account? Login then!
		        </Typography>
		        <TextField
		          id="email"
		          label="email id"
		          type="email"
		          marginForm
		        />
		        <TextField
		          id="password"
		          label="Password"
		          type="password"
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