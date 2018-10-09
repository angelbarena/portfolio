import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CSSTransition} from 'react-transition-group';

export default class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    name: "React based",
                    list: [
                        {
                            title:"PoC Jest & Enzyme Testing: ",
                            repo: "https://github.com/Angel-Barena/jest-enzyme-testing", 
                            demo: "https://angel-barena.github.io/jest-enzyme-testing/"
                        }
                    ]
                }
            ]
        }
    }

    renderProjects(){
        function renderCategoryList(list){
            return(
                <ul className="projects__list">
                    {
                        list.map(entry=>{
                            return(
                                <li key={entry.title} className="projects__list-item">
                                    <h2 className="projects__list-item-title">{entry.title}</h2>
                                    <div>
                                        <a className="projects__list-item-repo" href={entry.repo} target="_blank">Repo</a>
                                        <a className="projects__list-item-demo" href={entry.demo} target="_blank">Demo</a>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            );
        }
        return(
            <section className="projects-section">
                <ul className="projects-section__category">
                {
                    this.state.projects.map(category=>{
                        return(
                            <li key={category.name} className="category__list-item">
                                <h2 className="category__list-item__name">{category.name}</h2>
                                {renderCategoryList(category.list)}
                            </li>
                        )
                    })
                }
                </ul>
            </section>
         );
    }

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
                    {this.renderProjects()}         
                </main>
            </CSSTransition>
        );
    }
}