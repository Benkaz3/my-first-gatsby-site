import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

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

export const Head = () => {
    return(
        <div>
            <title>Dũng Trần | Web Developer & Marketer</title>
            <meta 
                name="description" 
                content="Passionate web fanatic" />
            <meta
                name="keywords"
                ontent="Dũng Trần, React, HTML, CSS, Javascript, frontend dev"
            />
        </div>)
}
 
export default AboutPage