import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import Header from './Header';


ReactDOM.render(<Menu/>,document.getElementById('menu'))
ReactDOM.render(<MobileMenu/>,document.getElementById('mobile-menu'))
ReactDOM.render(<Header/>,document.getElementById('header'))
ReactDOM.render(<App />, document.getElementById('root'))


serviceWorker.register();