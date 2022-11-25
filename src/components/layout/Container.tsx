import { styled } from 'stitches.config';
import tw from 'twin.macro';

const Container = styled('section', {
    ...tw`container
        flex flex-col flex-1 justify-center items-center
        w-screen`,
});

export default Container;
