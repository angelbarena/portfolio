import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    renderItems(){
        return this.props.navListItems.map(item=>{
            return(
                <li key={item.name} className="nav-list__item">
                    <NavLink className="nav-list__item__link" activeClassName="selected" to={`${this.props.subRoute}${item.href}`}>
                    {item.name}
                    </NavLink>
                </li>
            );
        });
    }

    render(){
        return(
            <nav className="nav">
                <div className="nav-logo">
                    <Link to={`${this.props.subRoute}/`} className="nav-logo__link">
                        <svg className="nav-logo__icon">
                            <defs>
                                <mask id="mask" x="0" y="0" width="100%" height="100%">
                                <rect id="overlay" x="0" y="0" width="100%" height="100%" />
                                <text id="text" x="50%" y="-2" dy="35">ab</text>
                                </mask>
                            </defs>
                            <rect id="r" x="0" y="0" width="100%" height="100%" />
                        </svg>
                    </Link>
                </div>
                <ul className="nav-list">
                    {this.renderItems()}
                </ul>           
            </nav>
        );
    }
} 