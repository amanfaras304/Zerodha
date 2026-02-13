import React from 'react';


function Team() {
    return ( 

        <div className='container'>
            <div className='row p-3'>
                <h1 className='text-center fs-3'>People</h1>
            </div>
            <div className='row p-5'>
                <div className='col-5 text-center text-muted'>
                    <img src="media/Images/nithinKamath.jpg" style={{borderRadius:"100%",width:"70%"}} />
                    <h4 className='mt-3'>Nithin Kamath</h4>
                    <h6>Founder, CEO</h6>

                </div>
                <div className='col-7 mt-3' style={{lineHeight:"1.7"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on <a style={{textDecoration:"none"}} href="#">Homepage</a> / <a style={{textDecoration:"none"}}href="#">TradingQnA</a> / <a style={{textDecoration:"none"}}href="#">Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team; 