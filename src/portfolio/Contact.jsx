
export default function Contact() {
    return (
        <div>
            <section className="contact" id="contact">
                <h2>CONTACT <span>ME</span></h2>

                <form action="submit_form.php" method="POST" aria-label="Contact Form">
                    <div className="input-group">
                        <div className="input-box">
                            <input type="text" placeholder="Full Name" name="full_name" required aria-required="true" />
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Email" name="email" required aria-required="true" />
                        </div>
                        <div className="input-box">
                            <input type="number" placeholder="Phone Number" name="phone" required aria-required="true" />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Subject" name="subject" required aria-required="true" />
                        </div>
                    </div>

                    <div className="input-group-2">
                        <textarea name="message" cols="30" rows="10" placeholder="Your Message" required aria-required="true"></textarea>
                        <input type="submit" value="Send Message" className="btn" />
                    </div>
                </form>
            </section>
        </div>
    );
}
