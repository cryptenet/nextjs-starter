import { FC } from 'react';
import { styled } from 'stitches.config';
import tw from 'twin.macro';

const StitchedFooter = styled('footer', {
    ...tw`flex flex-col
        w-screen
		pt-8 pb-6`,
});

const Footer: FC = () => (
    <StitchedFooter>
        <p tw="text-center text-sm">&copy; Cryptenet Limited 2018-{new Date().getFullYear()}</p>
    </StitchedFooter>
);

export default Footer;
