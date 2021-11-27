import React from 'react';
import Footer from '../Footer/index.js';
import {ContactSection,ContactTitle,ContactSpan,Form,FormInput,InputText,InputEmail,InputExp,TextArea,InputSubmit} from './style.js';
const Contact = () => {
    return (
        <React.Fragment>
            <ContactSection>
                <div class="container">
                    <ContactTitle><ContactSpan>Drop </ContactSpan>Me A line</ContactTitle>
                    <Form>
                        <FormInput>
                            <InputText type="text" placeholder="Your Name" />
                            <InputEmail type="email" placeholder="Your Email" />
                        </FormInput>
                        <InputExp type="text" class="sub" placeholder="Your Subject" />
                        <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                        <InputSubmit type="submit" value="Send Message" />
                    </Form>
                </div>
            </ContactSection>
           <Footer />
        </React.Fragment>

    )
}
export default Contact;