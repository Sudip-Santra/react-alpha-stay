import React, { useState } from 'react';
import './updateDetails.css';

const UpdateDetails = () => {
    const [formData, setFormData] = useState({
        hotelName: '',
        contactNo: '',
        email: '',
        rooms: [
            { type: '', price: '', number: '', available: '' },
            { type: '', price: '', number: '', available: '' },
            { type: '', price: '', number: '', available: '' },
            { type: '', price: '', number: '', available: '' },
        ],
    });

    const handleInputChange = (index, field, value) => {
        const updatedRooms = formData.rooms.map((room, i) =>
            i === index ? { ...room, [field]: value } : room
        );
        setFormData({ ...formData, rooms: updatedRooms });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Submit formData to the server or handle as needed
    };

    return (
        <div className='UpdateDetails'>
            <div className="updateDetailsContainer">
                <header>Update Details</header>
                <form onSubmit={handleSubmit}>
                    <div className="form first">
                        <div className="details Hotel">
                            <span className="title">Basic Details</span>
                            <div className="fields">
                                <div className="input-field">
                                    <label htmlFor="hotelName">Hotel Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Hotel Name"
                                        name="hotelName"
                                        value={formData.hotelName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="contactNo">Contact No.</label>
                                    <input
                                        type="number"
                                        placeholder="Enter Contact No."
                                        name="contactNo"
                                        value={formData.contactNo}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="email">Email ID</label>
                                    <input
                                        type="email"
                                        placeholder="Enter Email ID"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {formData.rooms.map((room, index) => (
                            <div className="details Rooms" key={index}>
                                <span className="title">Room Details</span>
                                <div className="fields">
                                    <div className="input-field">
                                        <label htmlFor={`type${index}`}>Room Type - {index + 1}</label>
                                        <input
                                            type="text"
                                            placeholder="Enter Type of Room"
                                            value={room.type}
                                            onChange={(e) => handleInputChange(index, 'type', e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor={`price${index}`}>Price (Rs. / Day)</label>
                                        <input
                                            type="number"
                                            placeholder="Enter Price"
                                            value={room.price}
                                            onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor={`number${index}`}>Number of Rooms</label>
                                        <input
                                            type="number"
                                            placeholder="Enter Number of Rooms"
                                            value={room.number}
                                            onChange={(e) => handleInputChange(index, 'number', e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="availability-check">
                                        <label>Currently Available: &nbsp; &nbsp;</label>
                                        <input
                                            type="radio"
                                            id={`yes${index}`}
                                            name={`availability-check${index}`}
                                            value="yes"
                                            checked={room.available === 'yes'}
                                            onChange={(e) => handleInputChange(index, 'available', e.target.value)}
                                        />
                                        <label htmlFor={`yes${index}`}>Yes</label> &nbsp; &nbsp;
                                        <input
                                            type="radio"
                                            id={`no${index}`}
                                            name={`availability-check${index}`}
                                            value="no"
                                            checked={room.available === 'no'}
                                            onChange={(e) => handleInputChange(index, 'available', e.target.value)}
                                        />
                                        <label htmlFor={`no${index}`}>No</label>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="submitBtn">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateDetails;
