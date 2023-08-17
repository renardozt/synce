import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.scss';
import IconButton from '@mui/material/IconButton'
import Icon from '@mui/material/Icon'
import Button from '@mui/material/Button';
import $ from 'jquery';
import config from '../config.json';

export default class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            scrollTop: 0,
            slide: 0,
            dropdown: null
        }
    }

    componentDidMount() {
        $(window).on('scroll resize', () => this.sliderHandler());
        $(window).on('mousemove', (e) => this.mouseHandler(e));
    }

    sliderHandler() {
        !!this.state.dropdown && this.setState({
            dropdown: null
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

    dropdownHandler(section) {
        this.setState({
            dropdown: section == this.state.dropdown ? null : section
        })
    }

    render() {

        const lang = this.props.lang;

        return (
            <div className="navbar transparent">
                <title>{config.navbar.brand.join(' ')} | {lang.slogan}</title>
                <div className="container-fluid justify-content-between">
                    <div className="col-4 text-left justify-content-center">
                        <div className="navbar-brand">
                            <Link to="">
                                <IconButton>
                                    <img src={`/img/${config.navbar.logo}`} alt="" className='logo' />
                                </IconButton>
                            </Link>
                            <h1 className="title"><span>{config.navbar.brand[0]}</span> {config.navbar.brand[1]}</h1>
                        </div>
                    </div>
                    <div className="col-4 text-center justify-content-center">
                        <div className="navbar-pages">
                            <ul className='pages'>
                                {config.navbar.pages.map((page, index) => {
                                    return (
                                        <li>
                                            <NavLink to={page}>
                                                <Button>{lang.pages[index]}</Button>
                                            </NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-4 text-right justify-content-center">
                        <div className="navbar-end">
                            <div className="dropdown-area">
                                <Button onClick={() => this.dropdownHandler('lang')} className='lang' variant="text" size="large" color="inherit">
                                    <img src={`/img/lang/${lang.code}.png`} alt="" />
                                    <span>{lang.code}</span>
                                    <i class="fa-solid fa-angle-down"></i>
                                </Button>

                                {this.state.dropdown == 'lang' && <ul className="dropdown">
                                    {config.navbar.languages.map((lang, index) => {
                                        return (
                                            <li data-lang={lang.code}>
                                                <Button fullWidth={true}
                                                    style={{ justifyContent: "flex-start" }}
                                                    size="small"
                                                    color="inherit">
                                                    <img src={`/img/lang/${lang.code}.png`} alt="" />
                                                    <span>{lang.name}</span>
                                                </Button>
                                            </li>
                                        )
                                    })}
                                </ul>}
                            </div>

                            <div className="dropdown-area">
                                <IconButton onClick={() => this.dropdownHandler('theme')} className='theme' variant="outlined">
                                    <i className={config.navbar.themes.find(theme => theme.value == (localStorage.getItem('theme') || 'osdefault')).icon}></i>
                                </IconButton>

                                {this.state.dropdown == 'theme' && <ul className="dropdown">
                                    {config.navbar.themes.map((theme, index) => {
                                        return (
                                            <li data-theme={theme.value}>
                                                <Button fullWidth={true}
                                                    style={{ justifyContent: "flex-start" }}
                                                    size="small"
                                                    color="inherit">
                                                    <i className={theme.icon}></i>
                                                    <span>{lang.themes[index]}</span>
                                                </Button>
                                            </li>
                                        )
                                    })}
                                </ul>}
                            </div>

                            <IconButton className='support' variant="outlined">
                                <a href={config.navbar.support} target="_blank">
                                    <i class="fa-brands fa-discord"></i>
                                </a>
                            </IconButton>

                            <Button className='invite' variant="outlined" color="inherit">
                                <a href={config.navbar.invite} target="_blank">{lang.invite}</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}