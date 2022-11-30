import React from 'react';

const Footer = () => {
    return (

        <footer className="text-center text-lg-start bg-light text-muted mt-3">
            {/* Section: Links  */}
            <section >
                <div className="container text-center text-md-start mt-5 pt-1">
                    {/* Grid row */}
                    <div className="row mt-3">
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* Content */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem" />Capstone Project
                            </h6>
                            <p>
                                Capstone project for Kable Academy Web Development class of 2022. Developed by Alex Moss, the website demonstrates the full MERN stack.
                            </p>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Alex Moss
                            </h6>
                            <p>
                                <a href="https://github.com/mossalexr" className="text-reset">Github</a>
                            </p>
                            <p>
                                <a href="https://mossalexr.github.io/Portfolio/" className="text-reset">Portfolio</a>
                            </p>
                            <p>
                                <a href="https://www.linkedin.com/in/alex-moss-432868242/" className="text-reset">LinkedIn</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home" />Cincinnati, OH 45230, US</p>
                            <p>
                                <i className="fas fa-envelope" />
                                moss.alexr@gmail.com
                            </p>
                            <p><i className="fas fa-phone" /> 513-604-5053</p>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
            </section>
            {/* Section: Links  */}
            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright:
                <a className="text-reset fw-bold" href="/">Kable Capstone</a>
            </div>
        </footer>

    )
}

export default Footer