import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class About extends Component {

    render(){
        return (
            <main className="about">
                <h1 className="about-title">About Me</h1>
                <section className="about-placeholder">
                    <div className="about-placeholder--spinner">
                        <FontAwesomeIcon  icon="cog" spin/> 
                        <span> this section is work in progress...</span>
                    </div>
                    <a className="about-placeholder--link" 
                    href="https://github.com/Angel-Barena/portfolio" 
                    target="_blank" >
                        <span>Meanwhile, you could take a look at this website's repo </span>  
                        <FontAwesomeIcon  icon="external-link-alt"/>
                    </a> 
                </section>         
            </main>
        );
    }
}