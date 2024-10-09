import React, { useState } from "react";
import "../App.css"; // Adjust the path if necessary

const DoctorAppointmentBooking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [doctor, setDoctor] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const message = `Thank you, ${name}! Your appointment with ${doctor} on ${date} at ${time} has been successfully booked. A confirmation email has been sent to ${email}.`;

    setConfirmationMessage(message);
    setIsConfirmed(true);
  };

  const handleNewAppointment = () => {
    setIsConfirmed(false);
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setDoctor("");
  };

  return (
    <div className="colourbg pt-5 pb-5">
      <div className="box">
        {!isConfirmed ? (
          <section className="booking-form" id="booking-section">
            <h2>Book Your Appointment</h2>
            <form id="appointment-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="date">Appointment Date:</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />

              <label htmlFor="time">Appointment Time:</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />

              <label htmlFor="doctor">Select Doctor:</label>
              <select
                id="doctor"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a Doctor
                </option>
                <option value="Dr. John Smith">Dr. John Smith</option>
                <option value="Dr. Alice Brown">Dr. Alice Brown</option>
                <option value="Dr. Michael Lee">Dr. Michael Lee</option>
              </select>

              <button type="submit">Book Appointment</button>
            </form>
          </section>
        ) : (
          <section id="confirmation-section" className="confirmation-section">
            <h2>Appointment Confirmed</h2>
            <p id="confirmation-message">{confirmationMessage}</p>
            <button id="new-appointment-btn" onClick={handleNewAppointment}>
              Book New Appointment
            </button>
          </section>
        )}
      </div>
    </div>
  );
};

export default DoctorAppointmentBooking;
