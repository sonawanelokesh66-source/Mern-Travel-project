import { useState } from 'react';

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section>
      <div className="page-header">
        <h1>We'd love to hear from you</h1>
        <p>Whether you have a story to share or a question to ask, our inbox is open.</p>
      </div>

      <div className="content-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          {sent ? <p className="success-msg">Your message has been sent.</p> : null}
          <div className="form-row">
            <input placeholder="Your name" required />
            <input type="email" placeholder="Email address" required />
          </div>
          <select required>
            <option value="">Select a topic...</option>
            <option value="story">Submit a story</option>
            <option value="help">General enquiry</option>
          </select>
          <textarea placeholder="Tell us what's on your mind..." required />
          <button className="btn" type="submit">Send message</button>
        </form>

        <div className="info-cards">
          <div className="info-card"><h4>Email</h4><p>hello@wanderlog.com</p></div>
          <div className="info-card"><h4>Response Time</h4><p>Within 2 business days</p></div>
          <div className="info-card"><h4>Collaboration</h4><p>Partnership and contributor requests are welcome.</p></div>
        </div>
      </div>

      <div className="extra-section">
        <h2>What You Can Send Us</h2>
        <div className="mini-grid">
          <article className="mini-card">
            <h4>Travel story</h4>
            <p>First-person travel account from any destination.</p>
          </article>
          <article className="mini-card">
            <h4>Budget breakdown</h4>
            <p>Share realistic costs and spending tips from your trip.</p>
          </article>
          <article className="mini-card">
            <h4>Trekking notes</h4>
            <p>Route details, gear ideas, and practical safety advice.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contact;
