import React from 'react';

function Hero() {
    return ( 

        <div className='container'>
            <div className='row text-center mt-5 mb-5 p-5'>
                <h1 className='fs-3 mb-3'>Zerodha Products</h1>
                <h3 className='text-muted' style={{fontSize:"20px"}}>Sleek, modern, and intuitive trading platforms</h3>
                <p className='mt-3'>Check out our <a style={{textDecoration:"none"}} href="#">investment offerings   <i class="fa-solid fa-arrow-right-long"></i></a></p>

            </div>
        </div>
     );
}

export default Hero;