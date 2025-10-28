import "../css/Contact.css";

const Contact = () => {
  return (
    <div id="contact-container">
      <form method="POST" id="contact-form">
        <input
          type="hidden"
          name="access_key"
          value="b6d94d2f-3eb3-4f43-91a3-dbf28612d82a"
        />

        <p>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" required />
        </p>

        <p>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required />
        </p>

        <p>
          <label htmlFor="message">Message:</label>
        </p>
        <textarea name="message" required />

        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />

        <p>
          <button type="submit">Submit Form</button>
        </p>

        <div id="contact-result" />
      </form>
    </div>
  );
};

export default Contact;