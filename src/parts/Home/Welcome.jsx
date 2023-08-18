import React, { Component } from 'react';
import Button from '@mui/material/Button';

export default class Welcome extends Component {
    render() {
        return (
            <section id="welcome">
                <div className="container">
                    <div className="row justify-content-around text-center text-lg-left">
                        <div className="col-12 col-lg-6 text-area mb-5 mb-lg-0">
                            <h1><span>Synce</span> Bot | Hayalinizdeki Bot</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto maiores eum aperiam libero voluptatem a natus hic fugit illo debitis?</p>

                            <div className="buttons mt-2 justify-content-around justify-content-lg-start">
                                <Button className="invite" variant="contained" background="" color="inherit">
                                    Sunucuya Ekle!
                                </Button>
                                <Button className="support" variant="contained" color="inherit">
                                    Destek Sunucumuza Katıl!
                                </Button>
                            </div>

                        </div>
                        <div className="col-12 col-lg-6 text-center text-lg-right">
                            <img src={`/img/laptop.png`} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}