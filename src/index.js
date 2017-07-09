import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import App from './app'


render(<MuiThemeProvider><App/></MuiThemeProvider>,document.getElementById('app'));