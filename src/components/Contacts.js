import React from 'react';
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";

const Contacts = () => {

    const sendEmail = (e) => {

        const serviceID = "service_s962kt4";
        const templateID = "template_ID";
        const userID = "user_R2VstcMrVDspMB8sJvGKv";

        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="contacts">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Fill out the form.</p>
            </div>
            <div className="container mx-auto">
                <form onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-md-6 col-xm-12">
                            <input
                                id="name"
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                            />

                            <input
                                id="phone"
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                                name="phone"
                            />

                            <input
                                id="email"
                                type="email"
                                className="form-control"
                                placeholder="E-Mail"
                                name="email"
                            />

                            <input
                                id="subject"
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                name="subject"
                            />

                            <textarea
                                id="description"
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                name="description"
                            ></textarea>
                            <button btn-main-offer contact-btn class="btn btn-info" type="submit">SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
