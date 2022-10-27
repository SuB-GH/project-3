function ContactForm() {

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" >
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" />
        </div>
        <div>
          <p className="error-text"></p>
        </div>
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;