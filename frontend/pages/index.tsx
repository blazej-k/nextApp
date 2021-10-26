import type { GetStaticProps, NextPage } from 'next'
import { Header } from 'components' 
import { IDescription } from 'types'


const Home: NextPage<IDescription> = ({description}) => {
  return (
    <div className="page">
      <Header description={description}/>
    </div>
  )
}

export const getStaticProps: GetStaticProps<IDescription> = () => {
  return{
      props: {
          description: 'ss'
      }
  }
}

export default Home