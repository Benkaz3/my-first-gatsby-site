import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () =>{
    return(
        <div>
            <Layout pageTitle="About Me">
                <h3>Dung Tran</h3>
                <p>{`A few years back, I started playing around with Python, 
                     building a hobby project to scrape random web info.
                    That's when I discovered my passion for programming and decided 
                    to dive into web development. Along the way, I learned 
                    new languages, frameworks, and tools through trial and error.`}</p>
            </Layout>
        </div>
    )
}

export const Head = () => <Seo title="About me"/>
export default AboutPage