import { FC } from 'react';

const Footer: FC = () => (
    <footer className="flex flex-col w-screen pt-8 pb-6">
        <p className="text-center text-sm">
            &copy; Cryptenet Limited 2018-{new Date().getFullYear()}
        </p>
    </footer>
);

export default Footer;
