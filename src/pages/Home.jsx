import React, { Component } from 'react';
import '../styles/home.scss';
import {
    Welcome,
    Features,
    Stats,
    Faq
} from '../parts/Home'

export default class Home extends Component {
    render () {

        const lang = this.props.lang;
        return (
            <div className="home">
                <Welcome lang={lang.welcome} />
                <Features lang={lang.features} />
                <Stats lang={lang.stats} />
                <Faq lang={lang.faq} />
            </div>
        )
    }
}