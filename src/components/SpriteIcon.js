import React, { Component } from 'react';

class SpriteIcon extends Component {
    render() {
        const { svgIcon, color} = this.props;
        return (
            <svg viewBox={svgIcon.viewBox} className="tech-list__item__icon">
                <use xlinkHref={svgIcon.url}/>
            </svg>
        );
    }
}

export default SpriteIcon;