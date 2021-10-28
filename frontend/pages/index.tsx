import type { GetStaticProps, NextPage } from 'next'
import { Header } from 'components'
import { IDescription } from 'types'
import server from 'mocks'


const Home: NextPage<IDescription> = ({ description }) => {
  return (
    <div className="page">
      <Header description={description} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<IDescription> = async () => {
  server.listen()
  let ENDPOINT = process.env.HEADER_DESCRIPTION || ''
  const res = await fetch(ENDPOINT)
  const { description }: IDescription = await res.json()
  server.close()
  return {
    props: {
      description
    }
  }
}

export default Home