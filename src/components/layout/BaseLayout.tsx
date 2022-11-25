import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { styled } from 'stitches.config';
import tw from 'twin.macro';

interface BaseLayoutProps {
    pageTitle: string;
    children: ReactNode;
}

const StitchedMain = styled('main', {
    ...tw`flex flex-col justify-center items-center
        h-screen`,
});

const BaseLayout: FC<BaseLayoutProps> = ({ pageTitle, children }) => {
    const title = `${process.env.BRAND} | ${pageTitle}`;
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <StitchedMain>
                <Header />
                {children}
                <Footer />
            </StitchedMain>
        </>
    );
};

export default BaseLayout;
