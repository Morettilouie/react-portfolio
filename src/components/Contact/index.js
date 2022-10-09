import React from "react";

function Contact() {
    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    //const { name, email, message } = formState;
    
    // function handleChange(e) {
    //     setFormState({...formState, [e.target.name]: e.target.value })
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     console.log(formState);
    // }

    // return (
    //     <section>
    //         <h1>Contact me</h1>
    //         <form id="contact-form" onSubmit={handleSubmit}>
    //             <div>
    //                 <label htmlFor="name">Name:</label>
    //                 <input type="text" defaultValue={formState.name} onChange={handleChange} name="name" />
    //             </div>
    //             <div>
    //                 <label htmlFor="email">Email address:</label>
    //                 <input type="email" defaultValue={formState.email} onChange={handleChange} name="email" />
    //             </div>
    //             <div>
    //                 <label htmlFor="message">Message:</label>
    //                 <textarea name="message" defaultValue={formState.message} onChange={handleChange} rows="5" />
    //             </div>
    //             <button type="submit">Submit</button>
    //         </form>
    //     </section>
    // )
    return (
        <section id="contact-info">
            <h2 className="section-title">
                Contact Me
            </h2>
            <p>Phone: (636.577.7651)<br />
                Email: <a href="mailto:morettilouie@gmail.com">morettilouie@gmail.com</a></p>
                <p>Checkout my work at my <a href="https://github.com/Morettilouie">GitHub</a></p>
        </section>
    )
}

export default Contact;