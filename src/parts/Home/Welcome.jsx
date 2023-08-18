import React, { Component } from 'react';
import Button from '@mui/material/Button';
import config from '../../config.json';

export default class Welcome extends Component {
    render() {

        const lang = this.props.lang;
        return (
            <section id="welcome">
                <div className="container">
                    <div className="row justify-content-around text-center text-lg-left">
                        <div className="col-12 col-lg-6 text-area mb-5 mb-lg-0">
                            <h1><span>{config.home.welcome.brand[0]}</span> {config.home.welcome.brand[1]} {config.home.welcome.slogan.enable ? `${config.home.welcome.slogan.brace} ${lang.slogan}` : ''}</h1>
                            <p>{lang.desc}</p>

                            <div className="buttons mt-2 justify-content-around justify-content-lg-start">
                                <a className="invite" href={config.home.welcome.buttons.invite} target="_blank">
                                    <Button variant="contained" color="inherit">{lang.invite}</Button>
                                </a>
                                <a className="support" href={config.home.welcome.buttons.support} target="_blank">
                                    <Button variant="contained" color="inherit">{lang.support}</Button>
                                </a>
                            </div>

                        </div>
                        <div className="col-12 col-lg-6 text-center text-lg-right">
                            <img src={`/img${config.home.welcome.logo}`} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}