import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CSSTransition} from 'react-transition-group';

export default class Projects extends Component {

    render(){
        return (
            <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
                <main className="projects">
                    <h1 className="projects-title">Projects</h1>
                    <section className="projects-placeholder">
                        <div className="projects-placeholder--spinner">
                            <FontAwesomeIcon  icon="cog" spin/> 
                            <span> this section is work in progress...</span>
                        </div>
                        <a className="projects-placeholder--link" 
                        href="https://github.com/Angel-Barena/portfolio" 
                        target="_blank" >
                            <span>Meanwhile, you could take a look at this website's repo </span>  
                            <FontAwesomeIcon  icon="external-link-alt"/>
                        </a> 
                    </section>         
                </main>
            </CSSTransition>
        );
    }
}