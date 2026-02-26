function Contact() {
    return (
        <section className="card"> 
            <h2>Contact Me</h2>
            <form>
                <input type="text" id="name" placeholder="Name" /><br />
                <input type="email" id="email" placeholder="Email" /><br />
                <textarea placeholder="Message"></textarea><br />
                <button type="submit" id="submitBtn">Send</button>
            </form>
        </section>
    );
}

export default Contact;