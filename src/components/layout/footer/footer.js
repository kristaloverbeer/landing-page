import './footer.scss';

const Footer = (props) => {
    return (
        <div className="Footer" id="footer">
            <footer className="bg-dark text-center text-lg-start">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">See ya!</h5>
                            <p>Come and have a chat!</p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Pricing</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-light">Developers</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-light">Customers</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Support</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className="text-light">Particuliers</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-light">Professionels</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ background: "rgba(0, 0, 0, 0.2)" }}>
                    <a className="text-light" href="https://lewagon.com/">© 2021 Copyright Le Wagon</a>
                </div>
            </footer>
        </div >
    )
}

export default Footer;
