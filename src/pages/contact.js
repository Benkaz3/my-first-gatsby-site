import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ContactPage = () => {
    return(
        <Layout pageTitle="Drop me a chat">
            <p>Don't hesitate to get in touch! 📞 Whether you have questions, 
      need advice, or simply want to connect with a fellow web enthusiast, 
      I'm here to help. Reach out, and let's start a conversation! 😊✉️</p>
        </Layout>
    )
}

export const Head = () => <Seo title="Contact"/>

export default ContactPage