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
  server.listen({ onUnhandledRequest: "bypass" })
  const res = await fetch('http://localhost:3000/getDescription')
  const { description }: IDescription = await res.json()
  return {
    props: {
      description
    }
  }
} 

export default Home