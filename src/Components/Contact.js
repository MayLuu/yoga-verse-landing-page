import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Bạn có thắc mắc?</h1>
      <h1 className="primary-heading">Hãy để chúng tôi hỗ trợ bạn</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Gửi</button>
      </div>
    </div>
  );
};

export default Contact;
