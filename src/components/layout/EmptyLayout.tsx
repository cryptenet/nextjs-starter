import Footer from '@components/common/Footer';
import { styled } from '@stitches/react';
import Head from 'next/head';
import { FC, ReactNode } from 'react';
import tw from 'twin.macro';

interface EmptyLayoutProps {
    pageTitle: string;
    children: ReactNode;
}

const StitchedMain = styled('main', {
    ...tw`flex flex-col items-center justify-center 
        h-screen`,
});

const EmptyLayout: FC<EmptyLayoutProps> = ({ pageTitle, children }) => {
    const title = `${process.env.BRAND} | ${pageTitle}`;
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <StitchedMain>
                {children}
                <Footer />
            </StitchedMain>
        </>
    );
};

export default EmptyLayout;
