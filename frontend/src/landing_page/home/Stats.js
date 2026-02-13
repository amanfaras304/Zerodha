import React from 'react';

function Stats() {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className='col-5'>
                    <h1 className='fs-3 mb-5'>Trust with confidence</h1>

                    <h1 className='fs-4 mt-4'>Customer-first always</h1>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                    <h1 className='fs-4 mt-4'>No spam or gimmicks</h1>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#" style={{ textDecoration: "none" }}>Our philosophies.</a></p>

                    <h1 className='fs-4 mt-4'>The Zerodha universe</h1>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h1 className='fs-4 mt-4'>Do better with money</h1>
                    <p className='text-muted'>With initiatives like <a href="#" style={{ textDecoration: "none" }}>Nudge </a> and <a href="#" style={{ textDecoration: "none" }}>Kill Switch</a> we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-7'>
                    <img src="media/Images/ecosystem.png" style={{ width: "110%" }} className='mt-3' />
                </div>
            </div>
        </div>
    );
}

export default Stats;