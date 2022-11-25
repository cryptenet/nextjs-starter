import { FC } from 'react';
import { styled } from 'stitches.config';
import tw from 'twin.macro';

const StitchedNavbar = styled('nav', {
    ...tw`container`,
});

const Navbar: FC = () => <StitchedNavbar />;

export default Navbar;
