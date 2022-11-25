import { BaseLayout, Brand, Container } from '@components/index';
import { motion } from 'framer-motion';
import { FC } from 'react';

const Home: FC = () => (
    <BaseLayout pageTitle="Home">
        <Container>
            <Brand
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeOut', duration: 0.5 }}
            />
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                exit={{ opacity: 0 }}
                tw="text-lg sm:text-2xl md:text-4xl mt-8"
            >
                Next.js Boilerplate
            </motion.h1>
        </Container>
    </BaseLayout>
);

export default Home;
