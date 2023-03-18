import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
        </Head>
        <Component {...pageProps} />
    </>
);

export default App;
