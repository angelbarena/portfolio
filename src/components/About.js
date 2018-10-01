import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';

export default class About extends Component {
    constructor(props){
        super(props);
        this.state ={
            summary: [
                `I’m a Web Developer, I’ve worked in software engineering since 2014. 
                I got my first IT job at Accenture, where I worked mostly as a Junior Programmer and QA Tester. 
                I went through a sabbatical period in 2016 to finalize my University studies and switch my career path to web development. 
                Since 2017 I’ve been designing and developing websites and web applications for Systech a small IT enterprise in Reynosa.`,
                `I’m an avid learner of front end development and web design. 
                I enjoy building web apps with fullstack javascript tech like MERN, 
                but I understand it’s not a perfect fit for every project.`,
                `I like to lead a simple lifestyle, keep fit and nurture my mind and soul the best I can.`
            ],
            skills: [
                {id:0, lvl:"90%", name:"Front-end Development"},
                {id:1, lvl:"80%", name:"Back-end Development"},
                {id:2, lvl:"75%", name:"Web Design"}
            ]
        }
    }

    summary(){
        return(
            <section className="about-summary">
                {this.state.summary.map((p, i)=><p key={i} className="about-summary__paragraph">{p}</p>)}
            </section>
        );
    }

    skillsLvl(){
        const width={}
        return(
            <section className="about-skills">
                <h2 className="about-skills__title">Areas of Expertise</h2>
                <ul className="about-skills__list">
                    {
                        this.state.skills.map(skill=>{
                            return (
                                <li key={skill.id} className="about-skills__list-item">
                                    {skill.name} 
                                    <div className="skillbar--base">
                                    <div className="skillbar--lvl" style={{width: skill.lvl}}></div>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </section>
        );
    }

    render(){
        return (
            <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
                <main className="about">
                    <h1 className="about-title">About Me</h1>
                    {this.summary()}
                    {this.skillsLvl()}        
                </main>
            </CSSTransition>
        );
    }
}