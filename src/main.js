/*react*/
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import Main from './components/Main';
//font awesome icons
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
// We are only using the user-astronaut icon
library.add(faLinkedin, faGithub, faCodepen);
// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
//dom.watch();
//require('./icons/ab-logo.svg');
require("./scss/main.scss");


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
            <div className="container">
                <NavBar navListItems={this.state.navListItems}/>
                <Main/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
