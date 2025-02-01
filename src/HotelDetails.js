import React, { useState, useEffect } from 'react';
import './HotelDetails.css'; // Assuming CSS is already in place

const HotelDetails = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rating, setRating] = useState(0);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    // Function to show the slide at index
    const showSlide = (index) => {
      const offset = -index * 100;
      document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    };

    // Function to go to the next slide
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    // Initialize dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        setCurrentIndex(index);
        showSlide(index);
      });
    });

    // Auto-slide every 1.5 seconds
    const slideInterval = setInterval(nextSlide, 1500);

    // Initial slide
    showSlide(currentIndex);

    // Event listeners for buttons
    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);

    // Cleanup on component unmount
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar_logo">
          <img src="logo.jpg" alt="Logo" />
          <h2>Alpha Stay</h2>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={`bx bx-menu ${menuActive ? 'd-none' : ''}`}></i>
        </div>
        <div className={`close-icon ${menuActive ? '' : 'd-none'}`} onClick={toggleMenu}>
          <i className='bx bx-x'></i>
        </div>
        <div className={`navbar_menu ${menuActive ? 'active' : ''}`} id="navbarMenu">
          <a href="#">Home</a>
          <a href="#">Our Mission</a>
          <a href="#">Why Alpha Stay</a>
          <a href="#">List Your Hotel</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <div className="section_container header_container">
        <div className="header_image_container">
          <div className="slider">
            <div className="slides">
              <div className="slide">
                <img src="https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" />
              </div>
              <div className="slide">
                <img src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D" alt="Image 2" />
              </div>
              <div className="slide">
                <img src="https://media.istockphoto.com/id/1453121684/photo/modern-hotel-room-with-double-bed-night-tables-and-day-sofa-bed.webp?a=1&b=1&s=612x612&w=0&k=20&c=zF-6auZlzLpc2o8a9NMs6DPXi3w-_IqWoF73ApcVxms=" alt="Image 3" />
              </div>
            </div>
            <div className="slider-buttons">
              <button className="prev"><i className='bx bx-chevron-left'></i></button>
              <button className="next"><i className='bx bx-chevron-right'></i></button>
            </div>
            <div className="slider-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="section_container hotel_details">
        <div className="hotel_details_content">
          <h1>Wow Hotel</h1>
          <p className="address"><b>Address :</b> 1234 Lorem ipsum dolor sit amet consectetur.</p>
          <p className="price"><b>Price :</b> Starts @ Rs. 800</p>
          <p className="contact"><b>Contact :</b> +91 1234567890</p>
          <p className="description">
            <b>Description :</b> Welcome to Wow Hotel, where comfort meets convenience. Our hotel offers a range of
            amenities and exceptional service to ensure you have a memorable stay.
          </p>
          <div className="rating">
            {[...Array(5)].map((_, idx) => (
              <i
                key={idx}
                className={`bx ${rating > idx ? 'bxs-star' : 'bx-star'} star`}
                onClick={() => handleStarClick(idx)}
              ></i>
            ))}
            <span>({100} Reviews)</span>
          </div>
          <button className="submit-btn">See More</button>
        </div>
      </div>

      <div className="section_container hotel_room_policy_container" id="hotel_room_policy">
        <div className="hotel_room_policy_content">
          <h1>Hotel Room Policy</h1>
          <p className="line" style={{ color: 'white' }}>━</p>
          <div className="checkin-checkout">
            <label><b>Check-in</b></label>
            <button>12:00 AM</button>
            <label><b>Check-out</b></label>
            <button>12:00 PM</button>
          </div>
          <ul>
            <li>Couples are welcome</li>
            <li>Guests can check in using any local or outstation ID proof (PAN card not accepted).</li>
            <li>Policies are booking specific and would be informed to the guest at the time of booking or upon Check-In.</li>
          </ul>
          <button className="explore-btn" id="explore-btn">Explore More</button>
        </div>
      </div>

      <div className="section_container amenties" id="amenties">
        <div className="amenties_container">
          <h1>Amenities</h1>
          <p className="line" style={{ color: 'red' }}>━</p>
          <div className="services-section">
            <div className="service-box">
              <i className='bx bx-wifi'></i>
              <h3>WiFi Connectivity</h3>
              <p>Enjoy complimentary high-speed Wi-Fi access throughout the hotel for seamless connectivity during your stay.</p>
            </div>
            <div className="service-box">
              <i className='bx bx-tv'></i>
              <h3>Television</h3>
              <p>Each room features a flat-screen TV with premium channels for your entertainment and relaxation.</p>
            </div>
            <div className="service-box">
              <i className='bx bx-wind'></i>
              <h3>Air Conditioning</h3>
              <p>Stay cool and comfortable with individually controlled air conditioning in every room, ensuring optimal temperature.</p>
            </div>
            <div className="service-box">
              <i className='bx bxs-car-battery'></i>
              <h3>Power Backup</h3>
              <p>Reliable power backup ensures uninterrupted electricity supply for a hassle-free, comfortable stay at all times.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section_container reviews" id="reviews">
        <div className="reviews_content">
          <h1>Reviews</h1>
          <p className="line" style={{ color: 'red' }}>━</p>
          <div className="review_grid">

            {/* Review Box 1 */}
            <div className="review_box">
              <div className="review_header">
                <img src="https://i.pinimg.com/236x/fd/14/a4/fd14a484f8e558209f0c2a94bc36b855.jpg" alt="User Image" />
                <div className="name">
                  <h3>Touseeq Ijaz</h3>
                  <p>Software Developer</p>
                </div>
                <div className="rating">
                  {[...Array(5)].map((_, idx) => (
                    <i key={idx} className='bx bxs-star'></i>
                  ))}
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident tempor...</p>
            </div>

            {/* Review Box 2 */}
            <div className="review_box">
              <div className="review_header">
                <img src="https://i.pinimg.com/236x/fd/14/a4/fd14a484f8e558209f0c2a94bc36b855.jpg" alt="User Image" />
                <div className="name">
                  <h3>Jane Doe</h3>
                  <p>Graphic Designer</p>
                </div>
                <div className="rating">
                  {[...Array(5)].map((_, idx) => (
                    <i key={idx} className='bx bxs-star'></i>
                  ))}
                </div>
              </div>
              <p>Had a fantastic stay at Wow Hotel! The amenities were top-notch, and the staff was very friendly.</p>
            </div>

            {/* Review Box 3 */}
            <div className="review_box">
              <div className="review_header">
                <img src="https://i.pinimg.com/236x/fd/14/a4/fd14a484f8e558209f0c2a94bc36b855.jpg" alt="User Image" />
                <div className="name">
                  <h3>John Smith</h3>
                  <p>Engineer</p>
                </div>
                <div className="rating">
                  {[...Array(5)].map((_, idx) => (
                    <i key={idx} className='bx bxs-star'></i>
                  ))}
                </div>
              </div>
              <p>The hotel exceeded my expectations. The food was amazing, and the room was incredibly comfortable!</p>
            </div>

            {/* Review Box 4 */}
            <div className="review_box">
              <div className="review_header">
                <img src="https://i.pinimg.com/236x/fd/14/a4/fd14a484f8e558209f0c2a94bc36b855.jpg" alt="User Image" />
                <div className="name">
                  <h3>Sarah Lee</h3>
                  <p>Business Executive</p>
                </div>
                <div className="rating">
                  {[...Array(5)].map((_, idx) => (
                    <i key={idx} className='bx bxs-star'></i>
                  ))}
                </div>
              </div>
              <p>Excellent location! Easy access to nearby restaurants and shops. I loved the view from my room.</p>
            </div>

            {/* Review Box 5 */}
            <div className="review_box">
              <div className="review_header">
                <img src="https://i.pinimg.com/236x/fd/14/a4/fd14a484f8e558209f0c2a94bc36b855.jpg" alt="User Image" />
                <div className="name">
                  <h3>Michael Brown</h3>
                  <p>Architect</p>
                </div>
                <div className="rating">
                  {[...Array(5)].map((_, idx) => (
                    <i key={idx} className='bx bxs-star'></i>
                  ))}
                </div>
              </div>
              <p>Such a comfortable place to stay! The facilities were excellent, and the staff was very helpful.</p>
            </div>

            {/* Review Box 6 */}
            <div className="review_box">
              <div className="review_header">
                <img src="https://i.pinimg.com/236x/fd/14/a4/fd14a484f8e558209f0c2a94bc36b855.jpg" alt="User Image" />
                <div className="name">
                  <h3>Alice Williams</h3>
                  <p>Marketing Manager</p>
                </div>
                <div className="rating">
                  {[...Array(5)].map((_, idx) => (
                    <i key={idx} className='bx bxs-star'></i>
                  ))}
                </div>
              </div>
              <p>The best experience I've had in a while. Very relaxing atmosphere with amazing services.</p>
            </div>

          </div>
        </div>
      </div>


      <div className="section_container add_review" id="listing">
        <div className="add_review_content">
          <h1>Add A Review</h1>
          <p className="line" style={{ color: 'white' }}>━</p>
          <form action="#">
            <p className="rate-us">Rate Us :</p>
            <div className="rating">
              {[...Array(5)].map((_, idx) => (
                <i
                  key={idx}
                  className={`bx bx-star star ${rating > idx ? 'active' : ''}`}
                  onClick={() => handleStarClick(idx)}
                ></i>
              ))}
            </div>
            <textarea name="opinion" cols="30" rows="5" placeholder="Share Your Thoughts ..."></textarea>
            <div className="btn-group">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>


      <div className="section_container contact" id="contact">
        <div className="contact_content">
          <h1>Let's Get In Touch</h1>
          <p className="line" style={{ color: 'red' }}>━</p>
          <p>
            Let's build a community where we can connect hotels to clients in the best way possible.
            If you have any suggestions, send us a message and we will get back to you as soon as possible!
          </p>
          <div className="social-btn">
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-whatsapp"></i>
            <i className="bx bx-envelope"></i>
          </div>
        </div>
      </div>


      <footer>
        Copyright &copy; 2025 - Alpha Tech
      </footer>
    </div>
  );
};

export default HotelDetails;
