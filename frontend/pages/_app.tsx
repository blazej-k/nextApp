import UserProvider from 'context/userContext';
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import 'styles/index.scss'
require('mocks');

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => 
    <UserProvider>
        <Component {...pageProps} />
    </UserProvider>


export default MyApp
