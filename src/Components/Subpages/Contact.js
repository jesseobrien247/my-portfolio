import React from 'react'

export default function Contact() {

    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">Contact Me</h2>

            <div className="contact__container bd-grid">
                <form action="https://submit-form.com/JRrRdQ7V" className="contact__form">
                    <input type="hidden" name="_redirect" value="jesseobrien.net/"/>
                    <input type="hidden" name="_append" value="false"/>
                    <input name="name" type="text" placeholder="Name" className="contact__input"></input>
                    <input name="mail" type="mail" placeholder="Email" className="contact__input"></input>
                    <textarea name="message" id="" placeholder="Message" className="contact__input"></textarea>
                    <input type="submit" value="Send" className="contact__button button"></input>
                </form>
            </div>
        </section>
    )
}
