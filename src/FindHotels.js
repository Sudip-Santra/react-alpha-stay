import React from 'react';
import './FindHotels.css';
import { Link } from 'react-router-dom';

function FindHotels() {
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

    return (
        <div className="find-hotels">
            <nav className="navbar">
                <div className="navbar_logo">
                    <img src="logo.jpg" alt="Logo" />
                    <h2>Alpha Stay</h2>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className='bx bx-menu'></i>
                </div>
                <div className="close-icon" onClick={toggleMenu}>
                    <i className='bx bx-x'></i>
                </div>
                <div className="navbar_menu" id="navbarMenu">
                    <Link to="/">Home</Link>
                    <Link to="/">Our Mission</Link>
                    <Link to="/">Why Alpha Stay</Link>
                    <Link to="/">List Your Hotel</Link>
                    <Link to="/">Contact</Link>
                </div>
            </nav>
            <div className="section_container header_container">
                <div className="header_image_container">
                    <div className="header_content">
                        <h1>Welcome To Alpha Stay!</h1>
                        <p>Book Verified Hotels, Rooms and stay packages at lowest price.</p>
                    </div>
                    <div className="booking_container">
                        <form>
                            <div className="form_group">
                                <div className="input_group">
                                    <input type="text" />
                                    <label>Location</label>
                                </div>
                                <p>Where are you going?</p>
                            </div>
                            <div className="form_group">
                                <div className="input_group">
                                    <input type="text" />
                                    <label>Check In</label>
                                </div>
                                <p>Add date</p>
                            </div>
                            <div className="form_group">
                                <div className="input_group">
                                    <input type="text" />
                                    <label>Check Out</label>
                                </div>
                                <p>Add date</p>
                            </div>
                            <div className="form_group">
                                <div className="input_group">
                                    <input type="text" />
                                    <label>Guests</label>
                                </div>
                                <p>Add guests</p>
                            </div>
                        </form>
                        <button className="btn"><i className='bx bx-search' style={{ color: '#ffffff' }}></i></button>
                    </div>
                </div>
            </div>

            <section className="section_container popular_container">
                <h2 className="section_header" align="center">Popular Hotels</h2>
                <div className="popular_grid">
                    <Link to="/FindHotelRooms">
                        <div className="popular_card">
                            <img src="https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="popular hotel" />
                            <div className="popular_content">
                                <div className="popular_card_header">
                                    <h4>Hotel 1</h4>
                                    <h4>Starts @ Rs.499</h4>
                                </div>
                                <p>Pune, Maharashtra</p>
                                <div className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <p>(100 Reviews)</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/FindHotelRooms">
                        <div className="popular_card">
                            <img src="https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="popular hotel" />
                            <div className="popular_content">
                                <div className="popular_card_header">
                                    <h4>Hotel 2</h4>
                                    <h4>Starts @ Rs.549</h4>
                                </div>
                                <p>Pune, Maharashtra</p>
                                <div className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <p>(100 Reviews)</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/FindHotelRooms">
                        <div className="popular_card">
                            <img src="https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="popular hotel" />
                            <div className="popular_content">
                                <div className="popular_card_header">
                                    <h4>Hotel 3</h4>
                                    <h4>Starts @ Rs.599</h4>
                                </div>
                                <p>Pune, Maharashtra</p>
                                <div className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <p>(100 Reviews)</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/FindHotelRooms">
                        <div className="popular_card">
                            <img src="https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="popular hotel" />
                            <div className="popular_content">
                                <div className="popular_card_header">
                                    <h4>Hotel 4</h4>
                                    <h4>Starts @ Rs.449</h4>
                                </div>
                                <p>Pune, Maharashtra</p>
                                <div className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <p>(100 Reviews)</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/FindHotelRooms">
                        <div className="popular_card">
                            <img src="https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="popular hotel" />
                            <div className="popular_content">
                                <div className="popular_card_header">
                                    <h4>Hotel 5</h4>
                                    <h4>Starts @ Rs.649</h4>
                                </div>
                                <p>Pune, Maharashtra</p>
                                <div className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <p>(100 Reviews)</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/FindHotelRooms">
                        <div className="popular_card">
                            <img src="https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="popular hotel" />
                            <div className="popular_content">
                                <div className="popular_card_header">
                                    <h4>Hotel 6</h4>
                                    <h4>Starts @ Rs.549</h4>
                                </div>
                                <p>Pune, Maharashtra</p>
                                <div className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <p>(100 Reviews)</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="button">
                    <button className="contact-btn">Contact</button>
                </div>
            </section>
        </div>
    );
}

export default FindHotels;