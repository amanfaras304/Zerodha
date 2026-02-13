import React from 'react';

function Products() {
    return ( 
        <div className='container' >
             {/* Section-1 */}
            <div className='row p-4 border-top'>
                <div className='col-7 p-5'>
                    <img src='/media/Images/kite.png' style={{ width: "100%" }} />
                </div>
                <div className='col-5 p-5 mt-5'>
                    <h1 className='fs-4 mb-3'>Kite</h1>
                    <p style={{ lineHeight: "1.8", fontSize:"18px" }}>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
                    <div className=' mt-2'>
                        <a href='abc' style={{ textDecoration: "none" }}>Try demo <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a className='mx-5' href='abc' style={{ textDecoration: "none" }}>Learn more <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-6'> 
                            <img src='/media/Images/googlePlayBadge.svg' />
                        </div>
                        <div className='col-6'>
                            <img src='/media/Images/appstoreBadge.svg' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Section-2 */}
            <div className='row p-4'>
                <div className='col-5 p-5' style={{marginTop:"200px"}}>
                    <h1 className='fs-4 mb-3'>Console</h1>
                    <p style={{ lineHeight: "1.8", fontSize:"18px" }}>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
                    <div className=' mt-2'>
                        <a href='abc' style={{ textDecoration: "none" }}>Learn more <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div> 
                <div className='col-7 p-5'>
                    <img src='/media/Images/console.png' style={{ width: "110%" }} />
                </div>
            </div>
             {/* Section-3 */}
            <div className='row p-4'>
                <div className='col-7 p-5'>
                    <img src='/media/Images/coin.png' style={{ width: "100%" }} />
                </div>
                <div className='col-5 p-5 mt-5'>
                    <h1 className='fs-4 mb-3'>Coin</h1>
                    <p style={{ lineHeight: "1.8", fontSize:"18px" }}>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>
                    <div className=' mt-2'>
                        <a href='abc' style={{ textDecoration: "none" }}>Coin <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-6'> 
                            <img src='/media/Images/googlePlayBadge.svg' />
                        </div>
                        <div className='col-6'>
                            <img src='/media/Images/appstoreBadge.svg' />
                        </div>
                    </div>
                </div>
            </div>
                {/* Section-4 */}
            <div className='row p-4'>
                <div className='col-5 p-5' style={{marginTop:"200px"}}>
                    <h1 className='fs-4 mb-3'>Kite Connect API</h1>
                    <p style={{ lineHeight: "1.8", fontSize:"18px" }}>Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.</p>
                    <div className=' mt-2'>
                        <a href='abc' style={{ textDecoration: "none" }}>Kite Connect  <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div> 
                <div className='col-7 p-5'>
                    <img src='/media/Images/kiteconnect.png' style={{ width: "110%" }} />
                </div>
            </div>
                 {/* Section-5 */}
            <div className='row p-4'>
                <div className='col-7 p-5'>
                    <img src='/media/Images/varsity.png' style={{ width: "80%" }} />
                </div>
                <div className='col-5 p-5 mt-5'>
                    <h1 className='fs-4 mb-3'>Varsity mobile</h1>
                    <p style={{ lineHeight: "1.8", fontSize:"18px" }}>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>
                    <div className='row mt-5'>
                        <div className='col-6'> 
                            <img src='/media/Images/googlePlayBadge.svg' />
                        </div>
                        <div className='col-6'>
                            <img src='/media/Images/appstoreBadge.svg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Products;