import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import Head from 'next/head';
import { FC, ReactNode } from 'react';

interface BaseLayoutProps {
    pageTitle: string;
    children: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ pageTitle, children }) => {
    const title = `${process.env.BRAND} | ${pageTitle}`;
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main className="flex flex-col justify-center items-center h-screen">
                <Header />
                {children}
                <Footer />
            </main>
        </>
    );
};

export default BaseLayout;
