import Navbar from '@components/common/Navbar';
import { FC } from 'react';
import { styled } from 'stitches.config';
import tw from 'twin.macro';

const StitchedHeader = styled('header', {
    ...tw`flex flex-col
        w-screen`,
});

const Header: FC = () => (
    <StitchedHeader>
        <Navbar />
    </StitchedHeader>
);

export default Header;
