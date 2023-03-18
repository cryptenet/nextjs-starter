import { FC } from 'react';
import { BaseLayout, Container, Brand } from '@/components';
import { motion } from 'framer-motion';

const Home: FC = () => (
    <BaseLayout pageTitle="Home">
        <Container>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeOut', duration: 0.5 }}
                className="w-4/5 h-1/6"
            >
                <Brand />
            </motion.div>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                exit={{ opacity: 0 }}
                className="text-lg sm:text-2xl md:text-4xl mt-8"
            >
                Next.js Starter Template
            </motion.h1>
        </Container>
    </BaseLayout>
);

export default Home;
