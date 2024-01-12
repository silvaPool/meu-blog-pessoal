import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Typography } from '@mui/material'
// import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        // <main>
        //     <h1>Sobre mim</h1>
        //     <Link to="/">Back to Home</Link>
        //     <p>Sou arqueólogo</p>
        // </main>

        <Layout pageTitle="Sobre mim">
          <Typography>
                Sou um estudante de autodidata de tecnologia apaixonado por arquelogia!
          </Typography>
        </Layout>
    )
}

export const Head = () => <Seo title="Sobre mim" />

export default AboutPage;