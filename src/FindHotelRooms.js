// FindHotelRooms.js
import React from 'react';
import './FindHotelRooms.css';
import { Link } from 'react-router-dom';

function FindHotelRooms() {
  const toggleMenu = () => {
    const menu = document.getElementById('navbarMenu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

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
    <div className="find-hotel-rooms">
      <nav className="navbar">
        <div className="navbar_logo">
          <img src="logo.jpg" alt="Logo" /> 
          <h2>Alpha Stay</h2>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className='bx bx-menu'></i>
        </div>
        <div className="close-icon" onClick={toggleMenu} style={{ display: 'none' }}>
          <i className='bx bx-x'></i>
        </div>
        <div className="navbar_menu" id="navbarMenu">
          <Link to="/">Home</Link>
          <Link to="#">Our Mission</Link>
          <Link to="#">Why Alpha Stay</Link>
          <Link to="#">List Your Hotel</Link>
          <Link to="#">Contact</Link>
        </div>
      </nav>
      <div className="section_container header_container">
        <div className="header_image_container">
          <div className="header_content">
            <h1>Welcome To Hotel Name!</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, voluptate.</p>
          </div>
        </div>
      </div>

      <section className="section_container room_container">
        <h2 className="section_header" align="center">Our Rooms</h2>
        <div className="room_grid">
          <div className="room_card">
            <img
              src="https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="room hotel" />
            <div className="room_content">
              <div className="room_card_header">
                <h4>AC Room</h4>
                <h4>Rs.999/Day</h4>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, omnis.</p>
              <div className="rating">
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <p>(100 Reviews)</p>
              </div>
              <div className="book">
                <i className='bx bxs-circle'></i> Book Now
              </div>
            </div>
          </div>
          <div className="room_card">
            <img
              src="https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="room hotel" />
            <div className="room_content">
              <div className="room_card_header">
                <h4>Non-AC Room</h4>
                <h4>Rs.649/Day</h4>
              </div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, necessitatibus.</p>
              <div className="rating">
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <p>(100 Reviews)</p>
              </div>
              <div className="book unavailable">
                <i className='bx bxs-circle' style={{ color: 'red' }}></i> Unavailable
              </div>
            </div>
          </div>
          <div className="room_card">
            <img
              src="https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="room hotel" />
            <div className="room_content">
              <div className="room_card_header">
                <h4>Luxury Room</h4>
                <h4>Rs.1499/Day</h4>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, maiores.</p>
              <div className="rating">
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <p>(100 Reviews)</p>
              </div>
              <div className="book">
                <i className='bx bxs-circle'></i> Book Now
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <button className="contact-btn">Contact</button>
        </div>
      </section>
    </div>
  );
}

export default FindHotelRooms;
