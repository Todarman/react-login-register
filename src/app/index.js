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
	render(){
		const classes = this.props.classes;
		return(
				<Grid container className={classes.container}>
					<Grid item lg={4} md={6} sm={6} xs={12}>
			          <Login/>
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