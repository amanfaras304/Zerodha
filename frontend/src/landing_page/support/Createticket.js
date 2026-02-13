import React from 'react';

function Createticket() {
    return (

        <div class="container mt-5">
            <div className='row'>
                <div className='col-8'>

                    <div class="accordion" id="accordionExample">


                        <div class="accordion-item mb-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                                    <h4>Account Opening</h4>
                                </button>
                            </h2>
                            <div id="collapse1" class="accordion-collapse collapse show">
                                <div class="accordion-body">
                                    <ul>
                                        <a style={{ textDecoration: "none" }} href="#"><li>Resident individual</li></a>
                                        <a style={{ textDecoration: "none" }} href="#"><li>Minor</li></a>
                                        <a style={{ textDecoration: "none" }} href="#"><li>Non Resident Indian (NRI)</li></a>
                                        <a style={{ textDecoration: "none" }} href="#"><li>Company, Partnership, HUF and LLP</li></a>
                                        <a style={{ textDecoration: "none" }} href="#"><li>Glossary</li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item mb-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                                    <h4>Your Zerodha Account</h4>
                                </button>
                            </h2>
                            <div id="collapse2" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                    <ul>
                                        <a style={{ textDecoration: "none" }} href="#"><li>Your Profile</li></a>
                                        <a style={{ textDecoration: "none" }} href="#"><li>Account Modification</li></a>
                                        <a style={{ textDecoration: "none" }} href="#"><li>Client Master Report</li></a>
                                        <a style={{ textDecoration: "none" }} href="#"><li>Nomination</li></a>
                                        <a style={{ textDecoration: "none" }} href="#"><li>Transfer and Conversion of securities</li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item mb-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
                                    <h4>Kite</h4>
                                </button>
                            </h2>
                            <div id="collapse3" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                    <ul>
                                        <a style={{ textDecoration: "none" }} href="#"><li>IPO</li></a>
                                        <a style={{ textDecoration: "none" }} href="#"><li>Trading FAQs</li></a>
                                        <a style={{ textDecoration: "none" }} href="#"><li>Marging Trading Facility</li></a>
                                        <a style={{ textDecoration: "none" }} href="#"><li>Chartes and orders</li></a>
                                        <a style={{ textDecoration: "none" }} href="#"><li>General</li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item mb-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4">
                                    <h4>Funds</h4>
                                </button>
                            </h2>
                            <div id="collapse4" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                    <ul>
                                        <a style={{ textDecoration: "none" }} href='#' ><li>Add Money</li></a>
                                        <a style={{ textDecoration: "none" }} href='#' ><li>Withdraw Money</li></a>
                                        <a style={{ textDecoration: "none" }} href='#' ><li>Add banck account</li></a>
                                        <a style={{ textDecoration: "none" }} href='#' ><li>eMandates</li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5">
                                    <h4>Console</h4>
                                </button>
                            </h2>
                            <div id="collapse5" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                    <ul>
                                        <a style={{ textDecoration: "none" }} href='#' ><li>Portfolio</li></a>
                                        <a style={{ textDecoration: "none" }} href='#' ><li>Corporate action</li></a>
                                        <a style={{ textDecoration: "none" }} href='#' ><li>Funds statement</li></a>
                                        <a style={{ textDecoration: "none" }} href='#' ><li>Reports</li></a>
                                        <a style={{ textDecoration: "none" }} href='#' ><li>Profile</li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='col-4'>
                    <div class="Support-div" style={{ backgroundColor: "194, 143, 157" }}>
                        <ul>
                            <a href="#" class="text-primary text-decoration-none"> <li>Current Takeovers and Delisting – January 2026 </li></a>
                            <a href="#" class="text-primary text-decoration-none"> <li>Surveillance measure on scrips - January 2026 </li></a>
                        </ul>
                    </div>
                    <div>

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col"><h4 className='mt-3 fs-5 text-center'>Quick Links</h4></th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td><a href="#" class="text-primary text-decoration-none"> 1.    Track account opening</a></td>

                                </tr>
                                <tr>

                                    <td><a href="#" class="text-primary text-decoration-none"> 2.    Track segment activation</a></td>

                                </tr>
                                <tr>

                                    <td><a href="#" class="text-primary text-decoration-none"> 3.  Intraday margins</a></td>

                                </tr>
                                <tr>

                                    <td><a href="#" class="text-primary text-decoration-none"> 4.    Kite user manual</a></td>

                                </tr>
                                <tr>

                                    <td><a href="#" class="text-primary text-decoration-none"> 5.    Learn how to create a ticket </a></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Createticket;