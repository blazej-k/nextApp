import type { GetStaticProps, NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <h1>Hello</h1>
  )
}

export const getStaticProps: GetStaticProps = () => {
  console.log('@@@@@')
  return {
    props: {}
  }
}

export default Home
