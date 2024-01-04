import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
// import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    // <main>
    //   <h1>Seja muito bem vindo</h1>
    //   <Link to="/about">Sobre</Link>
    //   <p>Este aqui é o meu blog.</p>
    // </main>

    <Layout pageTitle="Home Page">
      <p>Meu blog pessoal</p>
      <StaticImage
      alt="Imagem de uma cruz"
      src="../images/cruzblog.jpg"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage;