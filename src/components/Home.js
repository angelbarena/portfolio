import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CSSTransition} from 'react-transition-group';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            socialListItems: [
                {
                    id:'linkedin',
                    iconName: 'faLinkedin',
                    href: 'https://www.linkedin.com/in/angel-barena/'
                },
                {
                    id:'github',
                    iconName: 'faGithub',
                    href: 'https://github.com/Angel-Barena'
                },
                {
                    id:'codepen',
                    iconName: 'faCodepen',
                    href: 'https://codepen.io/angel_barena'
                }
            ]
        };
    }
    renderSocialList(){
        return this.state.socialListItems.map(item=>{
            return (
                <li key={item.id} className="social-list__item">
                    <a className="social-list__item__link" href={item.href} target="_blank">
                        <FontAwesomeIcon icon={['fab',item.id]}/>
                    </a>
                </li>
            );
        });
    }

    render(){
        return(
            <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
                <main className="home">
                    <section className="headline">
                        <h1 className="headline__title">I'm Angel Barena</h1>
                        <h3 className="headline__subtitle">I make websites and applications</h3>
                    </section>
                    <section className="social">
                        <h2 className="social-title">find me in</h2>
                        <ul className="social-list">
                            {this.renderSocialList()}
                        </ul>
                    </section>
                </main>
            </CSSTransition>    
        );
    }
}