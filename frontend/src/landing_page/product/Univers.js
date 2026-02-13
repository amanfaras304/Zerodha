import React from 'react';

function Univers() {
    return (

        <div className='container'>
            <h5 className='text-muted text-center'>Want to know more about our technology stack? Check out the <a href='' style={{ textDecoration: "none" }}>Zerodha.tech</a> blog.</h5>
            <div className='text-center' style={{ marginTop: "100px" }}>
                <h3>The Zerodha Universe</h3>
                <p className='mt-4'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='blog p-4 m-5'>
                    <div className='row p-4'>
                        <div className='col-4'>
                            <img src='/media/images/zerodhaFundhouse.png' style={{ width: "60%" }} />
                            <p className='mt-1 p-3' style={{ fontSize: "13px" }}>Our asset management venture
                                that is creating simple and transparent index
                                funds to help you save for your goals.
                            </p>
                        </div>
                        <div className='col-4'>
                            <img src='/media/images/sensibullLogo.svg' style={{ width: "60%" }} />
                            <p className='mt-4 p-3' style={{ fontSize: "13px" }}>Options trading platform that lets you create strategies, analyze positions, and data points like open interest, FII/DII, and more.
                            </p>
                        </div>
                        <div className='col-4'>
                            <img src='/media/images/tijori.svg' style={{ width: "45%" }} />
                            <p className='mt-1 p-3' style={{ fontSize: "13px" }}>Investment research platform
                                that offers detailed insights on stocks,
                                sectors, supply chains, and more.
                            </p>
                        </div>
                    </div>
                    <div className='row p-4'>
                        <div className='col-4'>
                            <img src='/media/images/streakLogo.png' style={{ width: "50%" }} />
                            <p className='mt-1 p-3' style={{ fontSize: "13px" }}>Systematic trading platform
                                that allows you to create and backtest
                                strategies without coding.
                            </p>
                        </div>
                        <div className='col-4'>
                            <img src='/media/images/smallcaseLogo.png' style={{ width: "60%" }} />
                            <p className='mt-2 p-3' style={{ fontSize: "13px" }}>Thematic investing platform
                                that helps you invest in diversified
                                baskets of stocks on ETFs.
                            </p>
                        </div>
                        <div className='col-4'>
                            <img src='/media/images/dittoLogo.png' style={{ width: "45%" }} />
                            <p className='mt-1 p-3' style={{ fontSize: "13px" }}>Personalized advice on life
                                and health insurance. No spam
                                and no mis-selling.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Univers;