import React from 'react';

function Hero() {
    return (

        <div style={{ backgroundColor: "#f3f1f1c0" }}>
            <div className='container p-2 mb-5'>
                <din className='row mt-3 '>
                    <div className='d-flex flex-wrap justify-content-between'>
                        <h1>Support Portal</h1>
                        <button type="button" class="btn btn-outline-primary" style={{ height: "40px", width: "150px" }}>My ticket</button>
                    </div>
                    <div className='row mt-4 mb-3'>
                        <nav class="">
                            <form class="container-fluid">
                                <div class="input-group flex-nowrap">
                                    <span class="input-group-text" id="addon-wrapping"><i class="fa-solid fa-magnifying-glass"></i></span>
                                    <input style={{height:"65px"}} type="text" class="form-control" placeholder="Eg: How do I open my account, How do I activate F&O..." aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                            </form>
                        </nav>
                    </div>
                </din>
            </div>
        </div>



    );
}

export default Hero;