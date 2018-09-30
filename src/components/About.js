import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';

export default class About extends Component {

    render(){
        return (
            <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
                <main className="about">
                    <h1 className="about-title">About Me</h1>
                    <section className="about-section">
                        <p className="about-section__paragraph">
                        I’m a Web Developer, I’ve worked in software engineering since 2014. 
                        I got my first IT job at Accenture, where I worked mostly as a Junior Programmer and QA Tester. 
                        I went through a sabbatical period in 2016 to finalize my University studies and switch my career path to web development. 
                        Since 2017 I’ve been designing and developing websites and web applications for Systech a small IT enterprise in Reynosa.
                        </p>
                        <p className="about-section__paragraph">
                        I’m an avid learner of front end development and web design. 
                        I enjoy building web apps with fullstack javascript tech like MERN, 
                        but I understand it’s not a perfect fit for every project.
                        </p>
                        <p className="about-section__paragraph">
                        I like to lead a simple lifestyle, keep fit and nurture my mind and soul the best I can.
                        </p>
                    </section>         
                </main>
            </CSSTransition>
        );
    }
}