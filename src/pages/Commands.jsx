import React, { Component } from 'react';
import {
    Button,
    FormControl,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    IconButton
} from '@mui/material';
import config from '../config.json';
import '../styles/commands.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import $ from 'jquery';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#38b6ff',
        }
    }
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#38b6ff',
        }
    }
});

export default class Commands extends Component {

    constructor(props) {
        super(props);

        this.state = {
            category: -1,
            search: this.arrayConverter(this.props.lang.commands)
        }
    }

    arrayConverter(array) {
        let newArr = [];

        if (typeof array[0] == "object") {
            for (let i = 0; i < array.length; i++) {
                newArr = newArr.concat(array[i]);
            }
        } else {
            newArr = array;
        }

        return newArr;
    }

    search() {
        const searchString = $('.commands .list #search-text').val();
        const commands = this.arrayConverter(this.state.category == -1 ? this.props.lang.commands : this.props.lang.commands[this.state.category]);
        const search = commands.filter(cmd => cmd.name.toLocaleLowerCase('TR').includes(searchString?.toLocaleLowerCase('TR')));

        this.setState({ search });
    }

    setCategory(categoryID) {
        this.setState({
            category: categoryID
        }, () => this.search());
    }

    exampleHandler(el) {
        const example = $(el.currentTarget).parent().children('.example');

        example.toggleClass('active');
        example.stop().animate({
            height: 'toggle'
        }, 400)
    }

    render() {

        const lang = this.props.lang;

        return (
            <div className="commands">
                <div className="container">
                    <h1>{lang.title}</h1>
                    <p>{lang.desc}</p>
                    <div className="row justfiy-content-around">
                        <div className="categories col-3">
                            <ThemeProvider theme={this.props.theme == 'dark' ? darkTheme : lightTheme}>
                                <div className="content">
                                    <Button onClick={() => this.setCategory(-1)} variant={this.state.category == -1 ? 'contained' : 'text'}>Bütün Komutlar</Button>
                                    {lang.categories.map((category, index) => {
                                        return (
                                            <Button onClick={() => this.setCategory(index)} variant={this.state.category == index ? 'contained' : 'text'} data-category={index}>{category}</Button>
                                        )
                                    })}
                                </div>
                            </ThemeProvider>
                        </div>
                        <div className="list col-8">
                            <ThemeProvider theme={this.props.theme == 'dark' ? darkTheme : lightTheme}>
                                <FormControl sx={{ width: "100%" }} variant="outlined">
                                    <InputLabel>{lang.search}</InputLabel>
                                    <OutlinedInput
                                        id="search-text"
                                        onKeyUp={() => this.search()}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    edge="end"
                                                >
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label={lang.search}
                                    />
                                </FormControl>
                            </ThemeProvider>
                            <div className="commands-list">
                                {this.state.search.map((cmd, index) => {

                                    return (
                                        <div key={index} className="card col-12">
                                            <div onClick={(e) => this.exampleHandler(e)} className="main">
                                                <div className="d-flex">
                                                    <h1 className='mr-1'>
                                                        {cmd.name}
                                                    </h1>
                                                    <div className="descriptions">
                                                        {cmd.descriptions.map((desc, index) => {
                                                            return (
                                                                <p> {config.commands.brace} {desc}</p>
                                                            )
                                                        })
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="example">
                                                <p>{lang.prefix}{cmd.name} {cmd.args}</p>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}