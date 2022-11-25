import { motion } from 'framer-motion';
import { styled } from 'stitches.config';
import tw from 'twin.macro';

const Brand = styled(motion.div, {
    ...tw`w-4/5 h-1/6
        bg-brand-logo bg-no-repeat bg-center bg-contain`,
});

export default Brand;
