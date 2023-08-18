import React, { Component } from 'react';
import '../styles/home.scss';
import {
    Welcome
} from '../parts/Home'

export default class Home extends Component {
    render () {
        return (
            <div className="home">
                <Welcome />
            </div>
        )
    }
}