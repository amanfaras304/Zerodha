import React from 'react';
function Award() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="media/Images/largestBroker.svg" style={{width:"96%"}} />
                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-3 '> Largest stock brocker in India</h1>
                    <p className='mt-4'>2+ million Zerodha clients contribute to over 15% of all retail order
                        volumes in India daily by trading and investing in:</p>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <ul style={{fontSize:"17px"}}>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul style={{fontSize:"17px"}}>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Government Security</li>
                            </ul>    
                        </div>
                    </div>
                    <img src="media/Images/pressLogos.png" style={{width:"95%"}} className='mt-4' />
                </div>
            </div>
        </div>
    );
}

export default Award;