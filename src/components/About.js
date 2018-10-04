import React, {Component} from 'react';
import Icon from './Icon';
import {CSSTransition} from 'react-transition-group';
import SpriteIcon from './SpriteIcon';

const iconsArr = [];
import bootstrap from '../icons/bootstrap4.svg';
import express from '../icons/express.svg';
import socketio from '../icons/socketio.svg'
import webpack from '../icons/webpack.svg';
import babel from '../icons/babel.svg';
import photoshop from '../icons/photoshop.svg';
iconsArr.push(bootstrap, express, socketio, webpack, babel, photoshop);

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
                {id:1, lvl:"80%", name:"Back-end Development (NodeJS)"},
                {id:2, lvl:"75%", name:"Web Design"}
            ],
            techList:[
                {
                    name: "HTML",
                    list: [
                        {
                            name: "HTML5",
                            type: 'fa',
                            color: '#e44d26',
                            icon: 'html5'
                        },
                        // {
                        //     name: "JSX",
                        //     type: 'fa',
                        //     color: '#61dbfb',
                        //     icon: 'react'
                        // },
                        {   
                            name: "EJS templates",
                            type: "text",
                            color: "#000",
                            icon: "EJS"
                        }
                    ]
                },
                {
                    name: "CSS",
                    list:[
                        {
                            name: "CSS3",
                            type: 'fa',
                            color: '#146eb0',
                            icon: 'css3-alt'
                        },
                        {
                            name: "Sass",
                            type: 'fa',
                            color: "#c66394",
                            icon: "sass"
                        },
                        {
                            name: "Bootstrap",
                            type: "sprite",
                            icon: "bootstrap4"
                        }
                    ]
                },
                {
                    name: "JavaScript",
                    list:[
                        {
                            name:"ES6",
                            type: "fa",
                            color: "#e8d44d",
                            icon: "js"
                        },
                        {
                            name: "React.js",
                            type: 'fa',
                            color: '#61dbfb',
                            icon: 'react'
                        }
                    ]
                },
                {
                    name: "NodeJS",
                    list:[
                        {
                            name: "NodeJS",
                            type: 'fa',
                            color: '#80bc02',
                            icon: 'node-js'
                        },
                        {
                            name: "Express.js",
                            type: 'sprite',
                            icon: 'express'
                        },
                        {
                            name: "Socket.io",
                            type: 'sprite',
                            icon: 'socketio'
                        }
                    ]
                },
                {
                    name: "Build tools",
                    list: [
                        {
                            name: "Webpack",
                            type: "sprite",
                            icon: "webpack"
                        },
                        {
                            name: "Babel",
                            type: "sprite",
                            icon: "babel"
                        }
                    ]
                },
                {
                    name: "Other",
                    list:[
                        {
                            name: "Git",
                            type: 'fa',
                            color: '#000',
                            icon: 'git'
                        },
                        {
                            name: "Photoshop",
                            type: "sprite",
                            icon: "photoshop"
                        }
                    ]
                }
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

    techList(){
        return(
            <section className="about-tech">
                <h2 className="about-tech__title">Tech I've Used</h2>
                <div className="about-tech__list">
                    <ul className="category__name-col">
                        {
                            this.state.techList.map(category=>{
                                return (
                                    <li key={category.name} className="category__name-row">
                                        {category.name}
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <ul className="category__list-col">
                        {
                            this.state.techList.map(category=>{
                                return(
                                    <li key={category.name} className="category__list-row">
                                        {this.categoryList(category)}
                                    </li>
                                );
                            })
                        }
                    </ul>
                    
                </div>
            </section>
        );
    }

    categoryList(category){
        return(
            <ul className="tech-list">
                {category.list.map(tech=>{
                    const icon =<Icon tech={tech}/>
                    const spriteIcon = <SpriteIcon svgIcon={iconsArr.find(sprite=>sprite.id==`${tech.icon}-usage`)}/>
                    return(
                        <li key={tech.name} className="tech-list__item">
                            {tech.type=='sprite'? spriteIcon: icon}
                            <div className="tech-list__item__name">{tech.name}</div>
                        </li>
                    );
                })}
            </ul>
        );
    }

    iconType(tech){
        switch (tech.type) {
            case "text":
                const style = {
                    color: tech.color,
                    fontSize: "3rem",
                    lineHeight: "3.6rem",
                    fontWeight: "bold",

                }
                return <div icon={['fab', tech.icon]} className="tech-list__item__icon"style={style}>
                    {tech.icon}
                </div>;
                break;
            case "sprite":
                return <Icon svgIcon={bootstrapIcon}/>;
                break;
        
            default:
                return <FontAwesomeIcon icon={['fab', tech.icon]} 
                    className="tech-list__item__icon"
                    style={{color: tech.color}}/>;;
                break;
        }
    }

    render(){
        return (
            <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
                <main className="about">
                    <h1 className="about-title">About Me</h1>
                    {this.summary()}
                    {this.skillsLvl()}
                    {this.techList()}        
                </main>
            </CSSTransition>
        );
    }
}