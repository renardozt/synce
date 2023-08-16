import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.scss';
import IconButton from '@mui/material/IconButton'
import Icon from '@mui/material/Icon'
import Button from '@mui/material/Button';
import $ from 'jquery';

export default class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            scrollTop: 0,
            slide: 0
        }
    }

    componentDidMount() {
        $(window).on('scroll resize', () => this.sliderHandler());
        $(window).on('mousemove', (e) => this.mouseHandler(e));
    }

    sliderHandler() {
        !!this.state.options && this.setState({
            options: null
        })
        const navbar = $('.navbar');
        const scrollTop = $(window).scrollTop();

        if (scrollTop > navbar.outerHeight() || window.location.pathname != '/')
            navbar.removeClass('transparent')
        else {
            navbar.addClass('transparent');
        }

        if (scrollTop > this.state.scrollTop && scrollTop > navbar.outerHeight()) {
            if (this.state.slide != 0) {
                if (navbar.hasClass('slide')) navbar.css('top', `${scrollTop - navbar.position().top < 0 ? scrollTop : navbar.position().top}px`);
                else {
                    navbar.addClass('slide');
                    navbar.css('top', `${scrollTop}px`);
                }
                this.setState({ slide: 0 });
            }
        }
        else {
            if (this.state.slide != 1) {
                navbar.css('top', `${scrollTop - navbar.position().top > navbar.outerHeight() ? scrollTop - navbar.outerHeight() : navbar.position().top}px`);
                this.setState({ slide: 1 });
            }

            if (parseInt(navbar.css('top').replace('px', '')) > scrollTop) {
                navbar.css('top', '');
                navbar.removeClass('slide');
            }
        }


        this.setState({
            scrollTop: scrollTop
        })
    }

    mouseHandler(e) {
        const navbar = $('.navbar');
        if (e.pageY - $(document).scrollTop() < navbar.outerHeight() && navbar.hasClass('slide')) {
            navbar.css('top', `${$(window).scrollTop()}px`);
        }
    }

    render() {
        return (
            <div className="navbar transparent">
                <div className="container-fluid justify-content-between">
                    <div className="col-4 text-left justify-content-center">
                        <div className="navbar-brand">
                            <Link to="">
                                <IconButton>
                                    <img src="../img/logo.png" alt="" className='logo' />
                                </IconButton>
                            </Link>
                            <h1 className="title"><span>Synce</span> Bot</h1>
                        </div>
                    </div>
                    <div className="col-4 text-center justify-content-center">
                        <div className="navbar-pages">
                            <ul className='pages'>
                                <li>
                                    <NavLink to="">
                                        <Button>Home</Button>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/commands">
                                        <Button>Commands</Button>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4 text-right justify-content-center">
                        <div className="navbar-end">
                            <IconButton variant="outlined" size="large">
                                <i class="fa-solid fa-gear"></i>
                            </IconButton>
                            <a href="https://discord.gg/GqkXqUvyaD" target="_blank">
                                <IconButton variant="outlined" size="large">
                                    <i class="fa-brands fa-discord"></i>
                                </IconButton>
                            </a>
                            <a target="_blank" className='invite'>
                                <Button className='login' variant="outlined" color="inherit">Invite</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}