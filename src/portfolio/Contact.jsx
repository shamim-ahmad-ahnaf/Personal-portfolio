import Swal from 'sweetalert2'

export default function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "68b0aec2-f8d4-486f-b62b-7f7266eda3b3");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
            event.target.reset(); 
        } else {
            console.log("Error", res);
            alert("Something went wrong! Please try again.");
        }
    };

    return (
        <div>
            <section className="contact" id="contact">
                <h2>CONTACT <span>ME</span></h2>

                <form onSubmit={onSubmit} aria-label="Contact Form">
                    <div className="input-group">
                        <div className="input-box">
                            <input type="text" placeholder="Full Name" name="from_name" required />
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Email" name="from_email" required />
                        </div>
                        <div className="input-box">
                            <input type="number" placeholder="Phone Number" name="from_number" required />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Subject" name="from_subject" required />
                        </div>
                    </div>
                    <div className="input-group-2">
                        <textarea name="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
                        <input type="submit" value="Send Message" className="btn" />
                    </div>
                </form>
            </section>
        </div>
    );
}
