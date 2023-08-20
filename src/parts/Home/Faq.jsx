import React, { Component } from 'react';
import $ from 'jquery';

export default class faq extends Component {
    render() {

        const lang = this.props.lang;

        return (
            <section id="faq">
                <div className="container">
                    <h1 className='mb-5 text-center'>{lang.title}</h1>
                    <div className="row">
                        {lang.cards.map((card, index) => {
                            return (
                                <Question key={index} title={card.title} desc={card.desc} />
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

const Question = class Question extends Component {

    static defaultProps = {
        title: "ERROR: SET A TITLE!",
        desc: "ERROR: SET A DESCRIPTION!"
    }

    answerHandler(el) {
        const answer = $(el.currentTarget).parent().children('.answer');
        $('#faq .card .answer.active').each((index, e) => {
            if (!$(e).is(answer)) {
                $(e).stop().animate({
                    height: 'toggle'
                }, 400);
                $(e).removeClass('active');
                $(e).parent().children('.question').children('i').removeClass('active');
                $(e).css('height', '');
            }
        })

        answer.toggleClass('active');
        $(el.currentTarget).children('i').toggleClass('active');
        answer.stop().animate({
            height: 'toggle'
        }, 400)

    }

    render() {

        return (
            <div className="card col-12">
                <div onClick={(el) => this.answerHandler(el)} className="question d-flex justify-content-between">
                    <h1>
                        {this.props.title}
                    </h1>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>

                <div className="answer">
                    <p>{this.props.desc}</p>
                </div>
            </div>
        )
    }
}