import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import registerServiceWorker from './registerServiceWorker';
import CreateArticle from './components/CreateArticle';
import Login from './components/Login/index';
import SingleArticle from './components/SingleArticle/index';
import Signup from './components/Signup/index';


ReactDOM.render(
  <BrowserRouter>
  <div>
    <Navbar/>
    <Route exact path='/' component={Welcome}/>
    <Route path='/article/create' component={CreateArticle}/>
		<Route path='/login' component={Login}/>
		 <Route path='/signup' component={Signup}/>
    <Route path='/article/:slug' component={SingleArticle}/>
    <Footer/>
  </div>
</BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
