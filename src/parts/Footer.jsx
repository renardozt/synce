import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.scss';
import config from '../config.json';
import IconButton from '@mui/material/IconButton';
import { replacerJSX } from '../tools';

export default class Footer extends Component {
    render() {

        const lang = this.props.lang;

        return (
            <footer>
                <div className="container-fluid">
                    <div className="row justify-content-center justify-content-xl-around text-center text-xl-left">
                        <div className="area col-12 col-xl-auto mb-3 mb-xl-0 social">
                            <h1>{lang.social.title}</h1>
                            <ul>
                                <li>
                                    <IconButton color="inherit" variant="text">
                                        <a href="" ><i class="fa-brands fa-discord"></i></a>
                                    </IconButton>
                                </li>
                                <li>
                                    <IconButton color="inherit" variant="text">
                                        <a href="" ><i class="fa-brands fa-instagram"></i></a>
                                    </IconButton>
                                </li>
                            </ul>
                        </div>
                        <div className="area col-12 col-xl-auto mb-3 mb-xl-0 pages">
                            <h1>{lang.quickLinks.title}</h1>
                            <ul>
                                {config.footer.quickLinks.map((ql, index) => {
                                    return (
                                        <li>
                                            <Link to={ql} target={ql.startsWith('/') ? "_self" : "_blank"}>{lang.quickLinks.pages[index]}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="area col-12 col-xl-auto mb-3 mb-xl-0 pages">
                            <h1>{lang.developers.title}</h1>

                            <ul>
                                {config.footer.developers.map((dev, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={dev.link} target="_blank">{dev.name}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="area col-12 col-xl-auto mb-3 mb-xl-0 legal">
                            <h1>{lang.legal.title}</h1>

                            <IconButton color="inherit">
                                <Link to="/">
                                    <img src={`/img/${config.footer.legal.logo}`} alt="" />
                                </Link>
                            </IconButton>
                            <div className="copyright">
                                <p>&copy; {new Date().getFullYear()} {replacerJSX(lang.legal.copyright.title, 'span', config.footer.legal.brand)}</p>
                                <p>{lang.legal.copyright.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}