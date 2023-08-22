import React, { Component } from 'react';
import config from '../../config.json';
import VisibilitySensor from 'react-visibility-sensor';

export default class Features extends Component {
    render() {

        const lang = this.props.lang;

        return (
            <section id="features">
                <div className="container justify-content-center text-center">
                    <h1 className='mb-5'>{lang.title}</h1>
                    <div className="row">
                        {config.home.features.cards.map((card, index) => {
                            return (
                                <Feature key={index} icon={card} title={lang.cards[index].title} desc={lang.cards[index].desc} />
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

const Feature = class Feature extends Component {

    static defaultProps = {
        icon: "fa-solid fa-x",
        title: "ERROR: SET A TITLE!",
        desc: "ERROR: SET A DESCRIPTION!"
    }

    render() {
        return (
            <VisibilitySensor>
                {({ isVisible }) => {
                    return (
                        <div className={`card mb-5 mb-lg-0 col-12 col-lg-4${isVisible ? ' active' : ''}`}>
                            <i className={this.props.icon}></i>
                            <h1>{this.props.title}</h1>
                            <p>{this.props.desc}</p>
                        </div>
                    )
                }}
            </VisibilitySensor>
        )
    }
}