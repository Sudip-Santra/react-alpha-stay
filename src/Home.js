import React from 'react';
import './Home.css';
import logo from './logo.jpg'
import 'boxicons/css/boxicons.min.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const toggleMenu = () => {
        var menu = document.getElementById('navbarMenu');
        var menuIcon = document.querySelector('.menu-icon');
        var closeIcon = document.querySelector('.close-icon');

        menu.classList.toggle('active');

        if (menu.classList.contains('active')) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    };

    const navigate = useNavigate();

    const goToFindHotels = () => {
        navigate('/FindHotels');
    };
   
    const goToUpdateDetails = () => {
        navigate('/updateDetails');
    };

    return (
        <div className="main-home">
            <nav className="navbar">
                <div className="navbar_logo">
                    <img src={logo} alt="Logo" />
                    <h2>Alpha Stay</h2>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className='bx bx-menu'></i>
                </div>
                <div className="close-icon hide" onClick={toggleMenu}>
                    <i className='bx bx-x'></i>
                </div>
                <div className="navbar_menu" id="navbarMenu">
                    <a href="#">Home</a>
                    <a href="#our_mission">Our Mission</a>
                    <a href="#why_choose_AlphaStay">Why Alpha Stay</a>
                    <a href="#listing">List Your Hotel</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
            <div className="section_container header_container">
                <div className="header_image_container">
                    <div className="header_content">
                        <h1>Hotels At Your Fingertips</h1>
                        <p className="line" style={{ color: 'red' }}>━</p>
                        <p>Browse Listing - Direct Contact - Book With Confidence</p>
                        <div className="header_buttons">
                            <button className="find-hotels-btn" onClick={() => goToFindHotels()}>Find Hotels</button>
                            <button className="register-hotels-btn" onClick={() => goToUpdateDetails()}>Register Hotels</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section_container our_mission_container" id="our_mission">
                <div className="our_mission_content">
                    <h1>Our Mission ?</h1>
                    <p className="line" style={{ color: 'white' }}>━</p>
                    <p>To simplify this experience. We set out to create a platform where hotels can seamlessly list their properties, travellers can access comprehensive information, and direct communication becomes the norm. Say goodbye to sign-up hassle and hello to hassle-free stays. Welcomne to Alpha Stay, where convenience meets quality!</p>
                    <button className="explore-btn">EXPLORE</button>
                </div>
            </div>
            <div className="section_container why_choose_AlphaStay" id="why_choose_AlphaStay">
                <div className="why_choose_AlphaStay_container">
                    <h1>Why Choose Alpha Stay</h1>
                    <p className="line" style={{ color: 'red' }}>━</p>
                    <div className="services-section">
                        <div className="service-box">
                            <i className='bx bxl-sketch'></i>
                            <h3>Best Prices</h3>
                            <p>Our platform ensures that you get the most competitive prices without any hidden fees or surprise.</p>
                        </div>
                        <div className="service-box">
                            <i className='bx bx-laptop'></i>
                            <h3>No Signup</h3>
                            <p>Simply explore our listings and connect directly with the hotels that catch your eye.</p>
                        </div>
                        <div className="service-box">
                            <i className='bx bx-globe'></i>
                            <h3>Hotel Insights</h3>
                            <p>Dive into detailed information about each property. From room types and amenities to location.</p>
                        </div>
                        <div className="service-box">
                            <i className='bx bx-heart'></i>
                            <h3>Hotels at your Fingertips</h3>
                            <p>With Alpha Stay, you have access to curated selection of hotels right at your fingertips.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section_container list_property" id="listing">
                <div className="list_property_content">
                    <h1>Work With Alpha Stay</h1>
                    <button className="list_property_btn" onClick={() => goToUpdateDetails()}>List Your Property</button>
                </div>
            </div>
            <div className="section_container contact" id="contact">
                <div className="contact_content">
                    <h1>Let's Get In Touch</h1>
                    <p className="line" style={{ color: 'red' }}>━</p>
                    <p>Lets build a Community where we can connect hotels to clients in the best way possible. If you have any suggestion Send us a messages and we will get back to you as soon as possible!</p>
                    <div className="social-btn">
                        <i className='bx bxl-instagram'></i>
                        <i className='bx bxl-whatsapp'></i>
                        <i className='bx bx-envelope'></i>
                    </div>
                </div>
            </div>
            <footer>
                Copyright &copy; 2024 - Alpha Tech
            </footer>
        </div>
    );
}

export default Home;
