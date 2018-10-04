import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Icon extends Component {
    render() {
        const { tech } = this.props;
        switch (tech.type) {
            case "text":
                const style = {
                    color: tech.color,
                    fontSize: "3rem",
                    lineHeight: "3.6rem",
                    fontWeight: "bold",
                }
                return (
                    <div icon={['fab', tech.icon]} className="tech-list__item__icon"style={style}>
                    {tech.icon}
                    </div>
                );
                break;
        
            default:
                return <FontAwesomeIcon icon={['fab', tech.icon]} 
                    className="tech-list__item__icon"
                style={{color: tech.color}}/>;
                break;
        }
    }
}

export default Icon;