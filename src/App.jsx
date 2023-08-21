import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import $ from 'jquery';
import config from './config.json';
import {
  Navbar,
  Footer
} from './parts';
import {
  Home,
  Commands
} from './pages';
import * as lang from './lang';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      theme: localStorage.getItem('theme') || 'osdefault',
      lang: lang[localStorage.getItem('lang') || navigator.language.slice(0, 2) || 'en'] || lang.en
    }
  }

  componentDidMount() {
    this.setTheme();
    this.themeHandler();
    this.langHandler();
    //this.loaderHandler();
  }

  /*loaderHandler() {
    setTimeout(() => {
      $('#loader img').addClass('active');
      $('#loader').fadeOut(650);
      $('html, body').scrollTop(0);
      //setTimeout(() => $('html, body').css('overflow', ''),65e1)
    }, 5e2)
  }*/

  langHandler() {
    $('html').attr('lang', localStorage.getItem('lang') || navigator.language.slice(0, 2) || 'en');

    $(document).on('click', '.navbar .navbar-end .dropdown li', (el) => {
      const language = $(el.currentTarget).attr('data-lang');
      if (!language) return;

      $('html').attr('lang', language);
      localStorage.setItem('lang', language);
      this.setState({
        lang: lang[language] || lang.en
      });
    });
  }

  themeHandler() {
    $(document).on('click', '.navbar .navbar-end .dropdown li', (el) => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      const theme = $(el.currentTarget).attr('data-theme');
      if (!theme) return;

      let selection = theme;

      if (theme == 'osdefault')
        selection = darkThemeMq.matches ? 'dark' : 'light'

      if (!selection) return;

      localStorage.setItem('theme', theme);
      this.setState({ theme });
      this.setTheme();
    });
  }

  setTheme() {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    let selection = localStorage.getItem('theme');

    if (localStorage.getItem('theme') == 'osdefault' || !selection) {
      !selection && localStorage.setItem('theme', 'osdefault');
      selection = darkThemeMq.matches ? 'dark' : 'light'
    }

    $('html').attr('theme', selection);

    const theme = config.theme[selection] || config.theme.light;
    document.documentElement.style.setProperty('--theme-bg', theme.bg);
    document.documentElement.style.setProperty('--theme-card', theme.card);
    document.documentElement.style.setProperty('--theme-text', theme.text);
    document.documentElement.style.setProperty('--theme-hover', theme.hover);

    this.setState({ theme: selection });
  }

  render() {
    return (
      <Router>
        <Navbar lang={this.state.lang.navbar} />
        <Routes>
          <Route path="/" element={<Home lang={this.state.lang.home} />} />
          <Route path="/commands" element={<Commands theme={this.state.theme} lang={this.state.lang.commands} />} />
        </Routes>
        <Footer lang={this.state.lang.footer} />
      </Router>
    )
  }
}