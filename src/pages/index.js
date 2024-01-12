import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { Typography } from '@mui/material'
import styled from 'styled-components'

// import { Link } from 'gatsby'

const StyledTypography = styled(Typography) `
& {
  font-size: 5px;
  color: yellow;
}`


const IndexPage = () => {


  return (
    // <main>
    //   <h1>Seja muito bem vindo</h1>
    //   <Link to="/about">Sobre</Link>
    //   <p>Este aqui é o meu blog.</p>
    // </main>

    <Layout pageTitle="Home Page">
     <StyledTypography>
        Blog pessoal destinado a comentar sobre assuntos relevantes da arquelogia!
     </StyledTypography>
      <StaticImage
      alt="Imagem de uma cruz"
      src="../images/capela-sistina.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage;