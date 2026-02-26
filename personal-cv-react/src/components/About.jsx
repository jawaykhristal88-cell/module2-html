function About() {
    return (
        <section className="card">
            <h2>About Me</h2>
            <img src="images/profile.jpg" alt="Profile photo" width="150" style={{ textAlign: "center" }} /><br />
            
            <p style={{ textAlign: "justify" }}>
                I am Khristal Jaway, a dedicated IT student specializing in Web Systems and Technologies. 
                I have a strong interest in digital design and front-end development, and I like turning ideas into clean and functional designs. 
                I am still learning backend development and improving my technical skills step by step.
            </p>
                            
            <p>
                <strong>Email:</strong>
                <a href="https://mail.google.com/mail/u/0/#inbox">jaway.khristal88@gmail.com</a><br />
                <strong>GitHub:</strong>
                <a href="https://github.com/jawaykhristal88-cell" target="_blank" rel="noopener noreferrer">github.com</a>
            </p>
        </section>
    );
}

export default About;