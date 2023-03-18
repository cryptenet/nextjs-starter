import Footer from '@components/common/Footer';
import Head from 'next/head';
import { FC, ReactNode } from 'react';

interface EmptyLayoutProps {
    pageTitle: string;
    children: ReactNode;
}

const EmptyLayout: FC<EmptyLayoutProps> = ({ pageTitle, children }) => {
    const title = `${process.env.BRAND} | ${pageTitle}`;
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main className="flex flex-col items-center justify-center h-screen">
                {children}
                <Footer />
            </main>
        </>
    );
};

export default EmptyLayout;
