import React from 'react';
import './Footer.css'
import logo from '../logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="privacy_policy">
                <div>Privacy Note</div>
                <div>
                    By
                    using www.BookMovie.com(our website), you are fully accepting the
                    Privacy Policy available at  governing your access to BookMovie
                    and provision of services by BookMovie to you. If you do not accept
                    terms mentioned in the Privacy Policy,
                    ou must not share any of your personal information and immediately
                    exit BookMovie.</div>
            </div>
            <div className="part1">
                <div>
                    <div style={{ fontSize: '20px', marginRight: '30px' }}>List your show</div>

                    <div>Got a show, event, activity or a great experience? Partner
                        with us &amp; get listed on BookMovie
                    </div>
                </div>

            </div>


            <div className="part4">
                <div></div>
                <img src={logo} alt="" />
                <div></div>
            </div>

            <div className="part6">
                <div>Copyright 2024
                    ©  All Rights Reserved.
                </div>

            </div>
        </footer>
    )
}

export default Footer;