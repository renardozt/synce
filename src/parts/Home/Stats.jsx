import React, { Component } from 'react';
import config from '../../config.json';
import VisibilitySensor from 'react-visibility-sensor';
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton';
import CountUp from 'react-countup';
import { replacerJSX } from '../../tools';

export default class Stats extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            error: false,
            stats: [],
            refresh: 0,
        }
    }

    componentDidMount() {
        this.getStats();
    }

    getStats() {
        this.setState({
            loading: true
        });

        axios.get(config.home.stats.url).then(req => {
            const data = req?.data;
            
            if (!data?.refresh) {
                this.errorHandler();
                return;
            }

            this.setState({
                error: false,
                loading: false,
                stats: [this.numberFix(data.servers), this.numberFix(data.members), this.numberFix(data.channels)],
                refresh: Math.floor(((Date.now() - data.refresh) / 6e4))
            });
        }).catch(err => this.errorHandler())
    }

    errorHandler() {
        this.setState({
            loading: false,
            error: true
        });
    }

    numberFix(num) {
        let str = num.toString().split('');
        let firstNumber = str[0]
        let fixed = str.slice(1).map(n => "0").join('');

        return parseInt(firstNumber + fixed);
    }

    getRefreshType() {
        let msg = "default";
        if (this.state.refresh >= 60)
            msg = "timeout"

        if (this.state.refresh == 0)
            msg = "now"

        return msg;
    }

    render() {

        const lang = this.props.lang;

        return (
            <section id="stats">
                {this.state.error &&
                    <div className="error">
                        <div className="container">
                            <h1>{lang.error.title}</h1>
                            <p>{lang.error.desc}</p>
                            <LoadingButton
                                loading={this.state.loading}
                                onClick={() => this.getStats()}
                                variant="outlined"
                                color="inherit"
                            >
                                <span>{lang.error.button}</span>
                            </LoadingButton>
                        </div>
                    </div>
                }
                <div className="container justify-content-center text-center">

                    <h1>{lang.title}</h1>
                    <p className='mb-5'>{replacerJSX(lang.refresh[this.getRefreshType()], "span", this.state.refresh)}</p>
                    <div className="row">
                        <div className={`card mb-5 mb-lg-0 col-12 col-lg-3`}>
                            <img src={`/img${config.home.stats.logo}`} alt="" />
                        </div>
                        {config.home.stats.cards.map((card, index) => {
                            return (
                                <Stat key={index} icon={card} count={this.state.stats[index]} title={lang.cards[index]} />
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

const Stat = class Stat extends Component {

    static defaultProps = {
        icon: "fa-solid fa-x",
        count: 0,
        title: "ERROR: SET A TITLE!",
    }

    render() {
        return (
            <VisibilitySensor partialVisibility={true}>
                {({ isVisible }) => {
                    return (
                        <div className={`card mb-5 mb-lg-0 col-12 col-lg-3${isVisible ? ' active' : ''}`}>
                            <i className={this.props.icon}></i>
                            {isVisible ? <h1 className='count'><CountUp end={this.props.count} duration={2} /></h1> : <h1>0</h1>}
                            <p>{this.props.title}</p>
                        </div>
                    )
                }}
            </VisibilitySensor>
        )
    }
}