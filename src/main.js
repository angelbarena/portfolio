//require('./icons/ab-logo.svg');
import './scss/main.scss';
/*react*/
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
//react router dom
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
//font awesome icons
import { library, /*dom*/ } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import {faPhoneSquare, faEnvelopeSquare, faCog, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
library.add(
    faLinkedin, faGithub, faCodepen, 
    faPhoneSquare, faEnvelopeSquare, 
    faCog, faExternalLinkAlt);
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            navListItems: [
                {
                    name: 'about',
                    href: '/about'
                },
                {
                    name: 'projects',
                    href: '/projects'
                },
                {
                    name: 'contact',
                    href: '/contact'
                }
            ]
        }
    }
    render(){
        return(
            <Router>
                <div className="container">
                    <NavBar navListItems={this.state.navListItems}/>
                    <Switch>
                        <Redirect from='/portfolio/' to='/'/>
                        <Route path='/home' component={Home}/>
                        <Route path='/about' component={About}/>
                        <Route path='/projects' component={Projects}/>
                        <Route path='/contact' component={Contact}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);