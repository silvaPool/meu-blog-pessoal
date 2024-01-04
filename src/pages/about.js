import * as React from 'react'
import Layout from '../components/layout'
// import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        // <main>
        //     <h1>Sobre mim</h1>
        //     <Link to="/">Back to Home</Link>
        //     <p>Sou arqueólogo</p>
        // </main>

        <Layout pageTitle="Sobre mim">
            <p>Sou arqueólogo</p>
        </Layout>
    )
}

export const Head = () => <title>Sobre mim</title>

export default AboutPage;