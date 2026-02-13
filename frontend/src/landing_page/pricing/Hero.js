import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row text-center p-5 mt-5 mb-5'>
                <h1 className='fs-3'>Charges</h1>
                <h4 className='text-muted fs-5 mt-2'>List of all charges and taxes</h4>
            </div>
            <div className='row p-3 text-center mt-5'>
                <div className='col-4 p-3'>
                    <img src="/media/Images/pricing0.svg" style={{ width: "70%" }} />
                    <h3 className='mt-4'>Free equity delivery</h3>
                    <p className='mt-4 text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-3'>
                    <img src="/media/Images/intradayTrades.svg" style={{ width: "70%" }} />
                    <h3 className='mt-4'>Intraday and F&O trades</h3>
                    <p className='mt-4 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-3'>
                    <img src="/media/Images/pricing0.svg" style={{ width: "70%" }} />
                    <h3 className='mt-4'>Free direct MF</h3>
                    <p className='mt-4 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;