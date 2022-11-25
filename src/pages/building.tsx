import { Brand, Container, EmptyLayout } from '@components/index';
import { motion } from 'framer-motion';
import { FC } from 'react';

const Building: FC = () => (
    <EmptyLayout pageTitle="Building">
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
                tw="text-lg sm:text-xl md:text-2xl mt-8"
            >
                ** <span>This site is under maintenance</span> **
            </motion.h1>
        </Container>
    </EmptyLayout>
);

export default Building;
