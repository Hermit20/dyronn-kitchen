import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import "./Order.css"
import { SubHeading } from '../../components';
const Order = () => {
    const form = useRef();
    const [isEventOrder, setIsEventOrder] = useState(false);

    // This handler updates state based on which radio button is selected
    const handleOrderTypeChange = (e) => {
        const value = e.target.value;
        if (value === 'event') {
            setIsEventOrder(true);
        } else {
            setIsEventOrder(false);
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_x79g177',    // Replace with your EmailJS service ID
            'contact_form',   // Replace with your EmailJS template ID
            form.current,
            '6iaQIcCwWAQk7DYSZ'        // Replace with your EmailJS user ID
        )
            .then(() => {
                alert('Email sent successfully!');
            }, (error) => {
                console.error(error.text);
                alert('Error sending email.');
            });
    };
    return (
        <div className="container-contact-page">

            <div className="contact-form">
                <SubHeading title="Order Here" />
                <form ref={form} onSubmit={sendEmail}>
                    <ul className="order-list">
                        <li className="half">
                            <input placeholder="Name/Company" type="text" name="from_name" required />
                        </li>
                        <li className="half">
                            <input
                                placeholder="Email" type="email" name="from_email" required />
                        </li>

                        <li className="half">
                            <p>Phone Number (123-456-7890):</p>
                            <input placeholder="123-456-7890" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                        </li>


                        <li className="half">
                            <p>Date of your Order (Be sure to give us 1 weeks notice):</p>
                            <input placeholder="Date - give one weeks notice" type="date" id="birthdaytime" name="orderDate" disabled = {!isEventOrder}/>
                        </li>

                        <li className="half">
                            <p>Is this a Personal or Event Order:</p>
                            <input type="radio" id="personal" name="orderType" value="personal" onChange={handleOrderTypeChange}/>
                            <label for="personal">Personal Order</label><br />
                            <input type="radio" id="event" name="orderType" value="event" onChange={handleOrderTypeChange}/>
                            <label for="event">Event Order</label><br />
                        </li>

                        <li className="half">
                            <p>Which Menu are you ordering from:</p>
                            <input type="radio" id="african" name="Menu" value="West African Menu" />
                            <label for="african">West African Menu</label><br />
                            <input type="radio" id="west" name="Menu" value="Western Menu" />
                            <label for="west">Western Menu</label><br />
                            <input type="radio" id="corprate" name="Menu" value="Corprate Buffet Menu" />
                            <label for="corprate">Corprate Buffet Menu</label><br />
                        </li>

                        <li>
                            <textarea placeholder="Order" name="message" required />
                        </li>
                        <li>
                            <input type="submit" className="flat-button" value="SEND" />

                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}

export default Order