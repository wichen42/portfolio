import mail from "../assets/mail.svg";

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className="contact-header-container">
            <h2>CONTACT ME</h2>
            <span>Want to talk about my projects or colloborate on something new?</span>
        </div>
        <div className='contact-form-container'>
            <form method="post" action="https://formsubmit.co/56e7a89d8432ed656fa82768fe4ceaed">
                <input type="hidden" name="_captcha" value="false" />
				<input type="hidden" name="_next" value="https://wilsonchen.dev" />
                <input type="text" name="name" placeholder='Name' />
                <input type="text" name="email" placeholder='Email' />
                <textarea name='message' placeholder="Message">

                </textarea>
                <button type='submit'>SUBMIT</button>
            </form>
            <span className="contact-sep">OR</span>
            <div className="contact-info">
                <div className='icon-container'>
                        <img src={mail} alt="mail" />
                </div>
                <div className="email-container">
                    <h2>EMAIL</h2>
                    <span>wilsonchen901@gmail.com</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;