import React, {Component} from 'react';

export default class NavBar extends Component {

    renderItems(){
        return this.props.navListItems.map(item=>{
            return(
                <li key={item.name} className="nav-list__item">
                    <a className="nav-list__item__link" href="#">
                    {item.name}
                    </a>
                </li>
            );
        });
    }

    render(){
        return(
            <nav className="nav">
                <div className="nav-logo">
                    <a href="/" className="nav-logo__link">
                        <svg className="nav-logo__icon">
                            <defs>
                                <mask id="mask" x="0" y="0" width="100%" height="100%">
                                <rect id="overlay" x="0" y="0" width="100%" height="100%" />
                                <text id="text" x="50%" y="-2" dy="35">ab</text>
                                </mask>
                            </defs>
                            <rect id="r" x="0" y="0" width="100%" height="100%" />
                        </svg>
                    </a>
                </div>
                <ul className="nav-list">
                    {this.renderItems()}
                </ul>           
            </nav>
        );
    }
} 