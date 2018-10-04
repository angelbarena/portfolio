import React, { Component } from 'react';

class SpriteIcon extends Component {
    render() {
        const { svgIcon, color} = this.props;
        return (
            <svg viewBox={ svgIcon.viewBox } className="tech-list__item__icon" height="3.6rem">
                <use xlinkHref={ svgIcon.url } height="3.6rem"/>
            </svg>
        );
    }
}

export default SpriteIcon;